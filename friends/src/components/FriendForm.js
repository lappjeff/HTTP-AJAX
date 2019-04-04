import React from 'react'

import { UserForm, UserFormInput, UserFormBtn } from './styles/S_FriendForm'

const FriendForm = props => {
  const {handleName, handleAge, handleEmail, submitFriend, removeFriend} = props.changeHandlers
  const { age, name, email } = props.values

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
      <UserFormBtn onClick={props.updateFriend(props.id)}>{props.buttonText}</UserFormBtn>
      : <UserFormBtn onClick={submitFriend}>{props.buttonText}</UserFormBtn>}

    </UserForm>
  )

}

export default FriendForm
