import Front from './front'
import Players from './Players'
import Contact from './Contact'
import Player_profile from './Player_profile'
import './App.scss'
import { useState } from 'react'

function App() {
  const [isToggeled , setIsToggled] = useState(false)

  return (
    <div className="App">
      <Front/>
      <Players/>
      <Contact/>
    </div>
  )
}

export default App
