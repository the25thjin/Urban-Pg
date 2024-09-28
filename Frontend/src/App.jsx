import React from "react"

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
