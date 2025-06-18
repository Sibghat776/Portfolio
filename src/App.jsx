import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"
import AboutMe from "./Components/AboutMe"

function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-sky-400 to-sky-200 main">
        <Navbar />
        <Hero />
      </div>
      <AboutMe/>
        <Skills />
    </>
  )
}

export default App