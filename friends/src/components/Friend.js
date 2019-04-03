import React from 'react'

import {FriendItem} from './styles/S_Friend'

const Friend = props => {

  let{ user } = props

  return (
    <FriendItem>
      <p>{user.email}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>

    </FriendItem>
  )
}

export default Friend
