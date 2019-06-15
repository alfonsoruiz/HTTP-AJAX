import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      friends: [],
      newFriend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  addItem = (event, friend) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };
  
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route exact path='/friends' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path='/friends/:id' render={props => <Friend {...props} friends={this.state.friends} />} />
        <Route exact path='/form' render={props => <FriendForm {...props} additem={this.state.addItem} />} />
      </div>
    );
  }
}

export default App;