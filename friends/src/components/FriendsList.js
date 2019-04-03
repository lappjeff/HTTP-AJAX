import React from 'react'

import {ListWrapper, List} from './styles/S_FriendsList'
import Friend from './Friend'
const FriendsList = props => {

  let { friends } = props

  return (
    <ListWrapper>
      <List>
        {friends.map(friend => {
          return (
            <Friend key={friend.id} user={friend}/>

          )
        })}
      </List>

    </ListWrapper>
  )
}

export default FriendsList
