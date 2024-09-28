import React from "react"
// import Navbar from "./components/Homepage/navbar"
// import Hero from "./components/Homepage/hero"
// import Footer from "./components/Homepage/footer"
// import About from "./components/Homepage/about"
// import WhyUs from "./components/Homepage/whyus"
// import Testimonials from "./components/Homepage/testomonials"
// import Contact from "./components/Homepage/contact"
import Layout from "./components/Layout/Layout"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <div className="overflow-x-hidden">
      
     
      <Routes>
       <Route path="/" element={<Layout/>}/> 
      <Route path="login" element={<Login/>}/>
      <Route path="sign-up" element={<Signup/> }/> 
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
