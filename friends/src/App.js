import React, { useState, useEffect } from 'react';
import './App.css';

import axios from 'axios'

const App = props => {

  const [users, setUsers] = useState()

  useEffect(() => {
     axios
      .get('http://localhost:5000/friends')
      .then(res => {
        setUsers(res.data)
      })
      .catch(err => {
        console.log(err, 'data not loaded')
      })
  }, [])

  if (!users) {
    return (
      <div>Users Loading...</div>
    )
  }

  return (
    <div className="App">
      
    </div>
  );

}

export default App;
