import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My World</h1>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
    </>
  )
}

export default App
