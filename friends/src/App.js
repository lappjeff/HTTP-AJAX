import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

import FriendsList from './components/FriendsList'
const App = props => {

  const [users, setUsers] = useState()


  const data = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => setUsers(res.data))
      .catch(err => console.log('Data could not be retrieved'))
  }

  useEffect(() => setUsers(data), [])



  const removeFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      'User could not be deleted'
    })
  }
  //




  const changeHandlers = {
    removeFriend: removeFriend,
  }

  if (!users) {
    return (
      <div>Users Loading...</div>
    )
  }

  return (
    <div className="App">
      <FriendsList
        friends={users}
        changeHandlers={changeHandlers}
        setUsers={setUsers}
      />
    </div>
  );

}

export default App;
