import React from 'react'

import {ListWrapper, List} from './styles/S_FriendsList'
import Friend from './Friend'
import FriendForm from './FriendForm'

const FriendsList = props => {

  let { friends, changeHandlers, values } = props

  return (
    <ListWrapper>
      <List>
        <FriendForm
          changeHandlers={changeHandlers}
          values={values}
          buttonText='Add Friend'
        />
        {friends.map(friend => {
          return (
            <Friend
              key={friend.id} user={friend} 
              removeFriend={changeHandlers.removeFriend}
              values={values}
              changeHandlers={changeHandlers}
            />
          )
        })}
      </List>


    </ListWrapper>
  )
}

export default FriendsList
