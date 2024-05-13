import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import Fill from './components/Fill'
import Navbar from './components/Navbar'

function App() {

  return (
    <> 
      <div>
        <Navbar/>
        <Hero/>
      </div>
    </>
  )
}

export default App
