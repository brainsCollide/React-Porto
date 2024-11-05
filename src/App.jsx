import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import { ThemeProvider } from './API/contextAPI'

function App() {
  return (
      <ThemeProvider>
          <div>
              <Navbar />
              <Hero />
              <About />
              <Experience/>
              <Contacts />
          </div>
      </ThemeProvider>
  );
}

export default App;

