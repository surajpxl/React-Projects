import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 let myObj = {
  username: "Suraj",
  age: 23
 }
 let newArr = [1,2,3]
  return (
    <>
  <h1 className='text-3xl font-bold underline bg-gray-400 rounded-l mb-3'>
    Hello</h1>

    <Card username="suraj4455" btntext="click me" 
    // channel="coffees with code" someObj={myObj} someArr={newArr} 
    />

    <Card username="guptasuraj4455" />
    
    <Card username="gupta" btntext='here me'/>

</>
  )
}

export default App
