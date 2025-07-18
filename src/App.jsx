
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Contacts from './components/Contacts'
import { ThemeProvider } from './API/contextAPI'
import Projects from './components/Projects'
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
      <ThemeProvider>
          <div>
              <Navbar />
              <Hero />
              <About />
              <Experience/>
              <Projects />
              <Contacts />
          </div>
      </ThemeProvider>
  );
}

export default App;

