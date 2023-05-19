import React from 'react'
import Navbar from './Navbar'
import './landing.css'
function Header() {
  return (
    <div id="main">
        <Navbar />
        <div className="name">
          <h1><span>Surest way to fly</span> With our cheap Airline</h1>
          <p className="details">Travel to anywhere with in the globe with low budget</p>
          <a href="#" className="cv-btn">Browse  </a>
        </div>
    </div>
  )
}

export default Header