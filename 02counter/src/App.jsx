import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

// let counter = 6;

const addValue = ()=>{
if(counter < 20){
  counter = counter+1;
  // console.log("clicked", counter);
  setCounter(counter)
}
  else{
    console.log("Exceeded limit");
    
  }
}

const removeValue = ()=>{
  if(counter>0){
    
    setCounter(counter-1)
  }
  else{
    console.log("Negative value not support")
  }
}

  return (
    <>
    <h1>Coffees and React</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue}
    >Add Value</button>
    
    <br />

    <button
    onClick={removeValue}
    >Remove Value</button>
    </>
    )
  }

export default App
