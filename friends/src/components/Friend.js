import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {FriendItem} from './styles/S_Friend'

import FriendForm from './FriendForm'

const Friend = props => {

  let { user } = props



  return (
    <FriendItem>
      <p>Email: {user.email}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <a onClick={() => props.removeFriend(user.id)}>Remove {user.name}</a>
      <FriendForm
        buttonText='Update Friend'
        changeHandlers={props.changeHandlers}
        values={props.values}
        id={user.id}
        individualUser={user}
        setUsers={props.setUsers}
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
