import styled from 'styled-components'

const UserForm = styled.form `
  min-height: 100px;
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 5px;
`

const UserFormInput = styled.input `
  margin: 0 auto;
  width: 75%;
  border-radius: 5px;
  border: none;
  background: white;
  text-align: center;
`
const UserFormBtn = styled.button `
  width: 80%;
  margin: 0 auto;
  height: 30px;
  border-radius: 5px;
  border: none;
`

export {UserForm, UserFormInput, UserFormBtn}
