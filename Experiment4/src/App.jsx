import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'


function App() {

  return (
    <div>
      <h1>Exp4</h1>


        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          
          <Route path="/dashboard" element={<Dashboard/>}/>
          

          <Route path="/dashboard/profile" element={<Profile/>}/>
          <Route path="/dashboard/settings" element={<Settings/>}/>
          


        </Routes>
        </BrowserRouter>
            </div>

      
  
  )
}

export default App
