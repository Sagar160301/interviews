import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Solution from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Solution/>
    </>
  )
}

export default App
