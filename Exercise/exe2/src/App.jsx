import React from 'react'
import Profile from './Profile.jsx'
import ContextProvider from './context/ContextProvider.jsx'
import Home from './Home.jsx'

function App() {


  return (
    <ContextProvider>

      <Profile/>
      <Home/>
    </ContextProvider>
  )
}

export default App
