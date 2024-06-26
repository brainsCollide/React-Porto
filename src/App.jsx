import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import Projects from './components/Projects'
import Example from './components/Example'

function App() {

  return (
    <> 
      <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Experience/>
        <Contacts/>
      </div>
    </>
  )
}

export default App
