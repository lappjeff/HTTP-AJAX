import styled from 'styled-components'

const FriendItem = styled.li `
  background: white;
  min-height: 25px;
  width: 100%;
  margin-top: 5px;
  padding: 5px 10px;
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr);
`


export {FriendItem}
