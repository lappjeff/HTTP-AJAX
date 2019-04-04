import React from 'react'

import {ListWrapper, List} from './styles/S_FriendsList'
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = props => {

  let { friends, changeHandlers, values } = props

  return (
    <ListWrapper>

      <FriendForm
        changeHandlers={changeHandlers}
        values={values}
      />

      <List>
        {friends.map(friend => {
          return (
            <Friend key={friend.id} user={friend} removeFriend={changeHandlers.removeFriend}/>
          )
        })}
      </List>


    </ListWrapper>
  )
}

export default FriendsList
