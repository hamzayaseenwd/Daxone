import './App.css'
import Navbar from './components/Navbar'
import Hero_Section from './components/Hero_Section'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import WinterDiscount from './components/WinterDiscount'
import All_Products from './components/All_Products'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Navbar/>
      <Hero_Section/>
      <Section1/>
      <Section2/>
      <WinterDiscount />
      <All_Products />
      <Footer />
    </>
  )
}

export default App
