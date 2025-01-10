import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import AboutMe from './Components/AboutMe.jsx'
import Skills from './Components/Skills.jsx'
import Projects from './Components/Projects.jsx'

const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App