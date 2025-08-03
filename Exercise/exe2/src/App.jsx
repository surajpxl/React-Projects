import { useState } from 'react'
import Profile from './components/Profile'
import ContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ContextProvider>

      <Profile/>
    </ContextProvider>
  )
}

export default App
