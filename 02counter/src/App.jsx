import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0)
  const addValue=()=>{
    if(counter<20) {
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
  }
  }
  const removeValue=()=>{
    if(counter>0) setCounter(counter-1)
  }
  return (
    <>
    <h2>Counter Value:{counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br/>
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
