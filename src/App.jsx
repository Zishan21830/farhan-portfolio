import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'
import ContactMe from './Components/ContactMe.jsx'
import Services from './Components/Services.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Services/>
      <Projects/>
      <ContactMe/>
    </>
  )
}

export default App