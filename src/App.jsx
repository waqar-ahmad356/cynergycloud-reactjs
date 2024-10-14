import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Pricing from './components/Pricing/Pricing'
import Testimonials from './components/Testimonials/Testimonials'
import Signup from './components/Signup/Signup'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import About from './components/About/About'



const App = () => {
  return (
    <>
    <Navbar/>
    
    <Hero/>
    <About/>
    <Pricing/>
    <Testimonials/>
    <Signup/>
    <Contact/>
    <Footer/>
      
    </>
  )
}

export default App
