import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import herobg from "./components/hero-bg.svg";
import Home from './components/Home';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
function App() {


  return (
    <>
     <div >
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </Router>
      
      

     </div>
    </>
  )
}

export default App
