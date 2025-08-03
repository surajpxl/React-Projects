import React, { useContext } from 'react'

import userContext from './context/createContext'

function Profile() {
    const {user} = useContext(userContext)
  return (
    <div>
      <h1>Welcome</h1>
      <p>hello.{user.name}</p>
      <p>Age.{user.age}</p>
    </div>
  )
}

export default Profile
