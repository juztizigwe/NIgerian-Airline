import React, { useState } from 'react'
import './landing.css'
import { Link } from 'react-router-dom'
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
            <h1>Travel</h1>
         </a>
         <input type="checkbox" className="menu-btn" id="menu-btn"/>
         <label className='menu-icon' for="menu-btn">
                <span className="nav-icon"></span>
         </label>
         <ul className="menu" >
            <li><Link href="/">Home </Link></li>
            <li><a href="#">About </a></li>
            <li><Link to="/login">Sign In </Link></li>
            <li><Link to="/contact">Contact</Link>  </li>
         </ul>
    </nav>
  )
}

export default Navbar