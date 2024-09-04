import React from "react"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Footer from "./components/footer"
import About from "./components/about"
import WhyUs from "./components/whyus"
import Testimonials from "./components/testomonials"
import Contact from "./components/contact"

import {BrowserRouter} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <About/>
      <WhyUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
