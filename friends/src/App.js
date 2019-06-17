import React from 'react';
import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

import Home from './components/Home';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      activeFriend: null,
      friends: [],
      error: ''
    };
  }

  componentDidMount() {
    //axios returns a promise. When call is resolved it returns .then else returns .catch
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  addItem = (event, friend) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ 
          friends: res.data 
        });
        // Forces redirect to friends Route using the history prop on router wrapping App component
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };

  updateItem = (event, friend) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({ 
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  }

  setUpdateForm = (event, friend) => {
    event.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push('/form');
  }
  
  render() {
    return (
      <div className="App">

        <div className='header-wrapper'>
            <NavLink to='/friends'>
              <h1>Friends List</h1>
            </NavLink>
            <NavLink to='/form'>
              {/* Ternary operater, if state.activeItem are true display update else display add */}
              {`${this.state.activeItem ? 'Update' : 'Add' } Friend +`}
            </NavLink>
        </div>

        <Route exact path='/' component={Home} />
        <Route exact path='/friends' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path='/friends/:id' render={props => <Friend {...props} friends={this.state.friends} setUpdateForm={this.setUpdateForm} />} />
        <Route exact path='/form' render={props => <FriendForm {...props} addItem={this.addItem} updateItem={this.updateItem} activeFriend={this.state.activeFriend}/>} />
      </div>
    );
  }
}

export default App;