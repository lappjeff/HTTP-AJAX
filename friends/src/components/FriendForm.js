import React, { useState } from 'react'

import { UserForm, UserFormInput, UserFormBtn } from './styles/S_FriendForm'

import axios from 'axios'

const FriendForm = props => {

  const [age, setAge] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')


  const newUser = {
    name: name,
    age: age,
    email: email,
    id: props.individualUser ? props.individualUser.id : Math.random(1, 200)
  }

  console.log(props)

  const handleAge = event => {
    setAge(event.target.value)
  }

  const handleName = event => {
    setName(event.target.value)
  }

  const handleEmail= event => {
    setEmail(event.target.value)
  }

  const updateFriend = (id, newUser) => event => {
    event.preventDefault()

    if (age && name && email) {

      axios.put(`http://localhost:5000/friends/${id}`, newUser)
        .then(res => props.setUsers(res.data))
        .catch(err => console.log(err))


      setAge('')
      setName('')
      setEmail('')
    } else {
      alert('Please fill all fields')
    }

  }

  const submitFriend = (event, newUser) => {
    event.preventDefault()

    if (age && name && email) {

      axios.post('http://localhost:5000/friends', newUser)
      .then(res => props.setUsers(res.data))
      .catch(err => 'user could not be added')

      setAge('')
      setName('')
      setEmail('')
    } else {
      alert('Please fill all fields')
    }

  }

  return (
    <UserForm>
      <UserFormInput
        onChange={handleName}
        name='name'
        placeholder='Enter name'
        value={name}
      />

      <UserFormInput
        onChange={handleAge}
        name='Age'
        placeholder='Enter age'
        value={age}

      />
      <UserFormInput
        onChange={handleEmail}
        name='email'
        placeholder='Enter email'
        value={email}

      />

      {props.buttonText === 'Update Friend' ?
      <UserFormBtn onClick={e => updateFriend(props.id, newUser)(e)}>{props.buttonText}</UserFormBtn>
      : <UserFormBtn onClick={e => submitFriend(e, newUser)}>{props.buttonText}</UserFormBtn>}

    </UserForm>
  )

}

export default FriendForm
