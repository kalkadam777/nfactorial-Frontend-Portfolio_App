import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Project from './components/Project/Project'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home';


function App() {


  return (
    <Router>

      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contacts" element={<Contact />} />
      </Routes>

    <Footer/>
  </Router>
  )
}

export default App
