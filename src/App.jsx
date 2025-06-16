import { useState } from 'react'
import './App.css'
import { Router } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"

function App() {

  return (
    <>
    <div className="bg-gradient-to-r from-gray-100 via-blue-200 to-gray-100 main">
      <Navbar/>
      <Hero/>
    </div>
    </>
  )
}

export default App