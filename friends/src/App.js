import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

import FriendsList from './components/FriendsList'
const App = props => {

  const [users, setUsers] = useState()
  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const data = () => {
    axios.get('http://localhost:5000/friends')
      .then(res => setUsers(res.data))
      .catch(err => console.log('Data could not be retrieved'))
  }

  useEffect(() => setUsers(data), [])

  const handleAge = event => {
    setAge(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handleEmail= event => {
    setEmail(event.target.value)
  }

  const removeFriend = id => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      setUsers(res.data)
    })
    .catch(err => {
      'User could not be deleted'
    })
  }

  const submitFriend = event => {

    const newUser = {
      name: name,
      age: age,
      email: email,
      id: Math.random(10, 500)
    }

    if (age && name && email) {
      axios.post('http://localhost:5000/friends', newUser)
      .then(res => setUsers(res.data))
      .catch(err => 'user could not be added')

      setAge('')
      setName('')
      setEmail('')
    } else {
      alert('Make sure you have all fields filled out')
    }

    event.preventDefault()
  }


  const changeHandlers = {
    handleAge: handleAge,
    handleName: handleName,
    handleEmail: handleEmail,
    submitFriend: submitFriend,
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
        submitFriend={submitFriend}
        values={{age, name, email}}
      />
    </div>
  );

}

export default App;
