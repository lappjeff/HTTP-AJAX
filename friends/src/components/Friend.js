import React from 'react'
import PropTypes from 'prop-types'

import {FriendItem} from './styles/S_Friend'

const Friend = props => {

  let{ user } = props
  return (
    <FriendItem>
      <p>{user.email}</p>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p onClick={() => props.removeFriend(user.id)}>Remove {user.name}</p>
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
