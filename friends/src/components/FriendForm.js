import React from 'react'

import { UserForm, UserFormInput, UserFormBtn } from './styles/S_FriendForm'

const FriendForm = props => {
  const {handleName, handleAge, handleEmail, submitFriend } = props.changeHandlers
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

      <UserFormBtn onClick={submitFriend} type='submit'>Add Friend</UserFormBtn>
    </UserForm>
  )

}

export default FriendForm
