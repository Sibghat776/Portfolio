import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Skills from "./Components/Skills"

function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-sky-400 to-sky-200 main">
        <Navbar />
        <Hero />
        <Skills />
      </div>
    </>
  )
}

export default App