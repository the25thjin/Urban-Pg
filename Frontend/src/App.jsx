import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Footer from "./components/footer"
import About from "./components/about"
import WhyUs from "./components/whyus"
import Testimonials from "./components/testomonials"
import Contact from "./components/contact"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <WhyUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
