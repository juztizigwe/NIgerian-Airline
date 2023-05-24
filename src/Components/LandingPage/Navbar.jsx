import React, { useState } from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
import AirlineLogo from "../../images/Airline Logo.png"
function Navbar() {
    const [nav, setNav] = useState(false)
    const changeBackground = () => {
        if(window.scroll >=50) {
            setNav(true)
        } else {
            setNav(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
  return (
    
    <nav className={nav ? 'nav active' : 'nav' }>
         <a href="#">
            <img 
            src={AirlineLogo}
            />
         </a>
         <input type="checkbox" className="menu-btn" id="menu-btn"/>
         <label className='menu-icon'>
                <span className="nav-icon"></span>
         </label>
         <ul className="menu" >
            <li><Link to="/"> </Link></li>
            <li><Link to="/login">Sign In </Link></li>
            <li><Link to="/contact">Contact</Link></li>
             <li><Link to="/book">Book A Flight</Link></li>
         </ul>
    </nav>
  )
}

export default Navbar