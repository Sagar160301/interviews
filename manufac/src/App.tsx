import React from 'react'
import './App.css'
import Flavanoids from './components/Flavanoids'
import Gamma from './components/Gamma'

function App (): React.ReactNode {
  return (
    <div className="App">
      <Flavanoids />
      <Gamma />
    </div>
  )
}

export default App
