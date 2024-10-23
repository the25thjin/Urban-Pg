import React from "react"

import Layout from "./components/Layout/Layout"
import Login from "./components/Login/Login"
import Signup from "./components/Login/Signup"
import EditProfile from "./components/Profile/editProfile.jsx"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Profile from "./components/Profile/profile.jsx"

function App() {
  return (
    <BrowserRouter>
    <div className="overflow-x-hidden">
      <Routes>
       <Route path="/" element={<Layout/>}/> 
      <Route path="login" element={<Login/>}/>
      <Route path="sign-up" element={<Signup/> }/> 
      <Route path="profile" element={<Profile/>}/>
      <Route path="profile/edit" element={<EditProfile/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
