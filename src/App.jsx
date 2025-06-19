import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import AboutMe from "./Components/AboutMe"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact.jsx"

function App() {

  return (
    <>
      <div className="bg-gradient-to-bl from-sky-500 via-sky-200 to-sky-500">
        <Navbar />
        <Hero />
      <AboutMe/>
        <Skills />
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App