import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "chaitanya",
    age: 21
  }

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-amber-400 text-black p-4 rounded-2xl'>Tailwind test</h1>
      <Card  username = "Chaitanya"  someObj={arr}/>
      <Card username = "Rayewar"/>
    </>
  )
}

export default App
