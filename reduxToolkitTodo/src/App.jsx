import { useState } from 'react'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>learn about redux toolkit </h1>
     <Todos />
     <AddTodo />
    </>
  )
}

export default App
