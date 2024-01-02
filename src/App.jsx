import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero_Section from './components/Hero_Section'
import Section1 from './components/Section1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero_Section/>
      <Section1/>
    </>
  )
}

export default App
