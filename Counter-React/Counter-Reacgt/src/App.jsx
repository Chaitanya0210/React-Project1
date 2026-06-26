import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(15)


  const addValue = ()=>{
    if(counter<20){
    counter++
    setCounter(counter)
    }
  }

  const decValue = ()=>{
    if(counter>0){
    counter--
    setCounter(counter)
    }
  }

  return (
    <>
      <h1>Hello Chaitnaya</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increment value</button>
      <br/>
      <button onClick={decValue}>Decrement value</button>
    </>
  )
}

export default App
