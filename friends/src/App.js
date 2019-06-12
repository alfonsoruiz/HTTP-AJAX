import React from 'react';
import axios from 'axios';

import './App.css';
import FriendsList from './components/FriendsList';

class App extends React.Component {

  componentDidMount() {
    console.log('Component did mount called');
    axios.get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;