import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import {FriendItem} from './styles/S_Friend'

import FriendForm from './FriendForm'

const Friend = props => {

  let { user } = props

  const [userName, setUserName] = useState(user.name)
  const [userAge, setUserAge] = useState(user.age)
  const [userEmail, setUserEmail] = useState(user.email)

  const updateFriend = id => event => {
    event.preventDefault()
    axios.put(`http://localhost:5000/friends/${id}`)
    console.log(id)
  }

  return (
    <FriendItem>
      <p>Email: {userEmail}</p>
      <p>Name: {userName}</p>
      <p>Age: {userAge}</p>
      <a onClick={() => props.removeFriend(user.id)}>Remove {user.name}</a>
      <FriendForm
        buttonText='Update Friend'
        changeHandlers={props.changeHandlers}
        updateFriend={updateFriend}
        values={props.values}
        id={user.id}
      />
    </FriendItem>
  )
}

Friend.propTypes = {
  user: PropTypes.shape ({
    name: PropTypes.string,
    email: PropTypes.string,
    age: PropTypes.number,
    id: PropTypes.number
  })
}

export default Friend
