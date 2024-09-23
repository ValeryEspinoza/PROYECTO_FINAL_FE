import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'
import AboutUs from '../Pages/AboutUs'
import Formularios from '../Pages/Formularios'
import Servicios from '../Pages/Servicios'
import ProtectedRoute from '../Components/General_Components/ProtectedRoutes'
import Proformas from '../Pages/Proformas'

function Routing() {
  return (
    <Router>
    <Routes>
      
      
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Formularios" element={<ProtectedRoute><Formularios /></ProtectedRoute>} />
      <Route path="/Servicios" element={<ProtectedRoute><Servicios /></ProtectedRoute>} />
      <Route path="/Register" element={<ProtectedRoute><Register /></ProtectedRoute>} />
      <Route path="/Proformas" element={<ProtectedRoute><Proformas /></ProtectedRoute>} />
       

    </Routes>
   </Router>
  )
}

export default Routing