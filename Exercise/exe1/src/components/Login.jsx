import React, { useState } from 'react'
import contextProvider from '../context/contextProvider'
import { useContext } from 'react'

function Login() {
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
const {setUser} = useContext(contextProvider)

    handleSubmit = (e) => {
        e.preventDefault()
        setUser(username, password)
    }
  return (
    <div>
      <h1>
        Login Page
      </h1>
      <form action="">
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='Enter username' />
        
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter password' />
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  )
}

export default Login
