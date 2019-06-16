import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import Friend from './components/Friend';
import UpdateFriend from './components/UpdateFriend';
import DeleteFriend from './components/DeleteFriend';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      friends: []
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
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  };

  updateItem = (event, id, friend) => {
    event.preventDefault();
    axios.put(`http://localhost:5000/friends/${id}`, friend)
      .then(res => this.setState({ friends: res.data}))
      .catch(err => console.log(err));
  }

  deleteItem = (event, id) => {
    event.preventDefault();
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/friends' render={props => <FriendsList {...props} friends={this.state.friends} />} />
        <Route path='/friends/:id' render={props => <Friend {...props} friends={this.state.friends} />} />
        <Route exact path='/form' render={props => <FriendForm {...props} addItem={this.addItem} />} />
        <Route exact path='/update' render={props => <UpdateFriend {...props} updateItem={this.updateItem}/> } />
        <Route exact path='/delete' render={props => <DeleteFriend {...props} deleteItem={this.deleteItem}/> } />
      </div>
    );
  }
}

export default App;