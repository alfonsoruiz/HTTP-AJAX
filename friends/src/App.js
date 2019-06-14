import React from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
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
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  addItem = (event, friend) => {
    event.preventDefault();
    axios.post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ newFriend: res.data }))
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <h1>Friends List</h1>
        <FriendForm addItem={this.addItem}/>
        <FriendsList friends={this.state.friends}/>
      </div>
    );
  }
}

export default App;