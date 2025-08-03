import React from 'react'
import { useContext } from 'react'
import userContext from './context/createContext'


function Home() {
    const {user} = useContext(userContext)
  return (
    <div>
      <h1>My name is {user.name}</h1>
    </div>
  )
}

export default Home
