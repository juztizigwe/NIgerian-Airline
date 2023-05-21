import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';



import { collection, addDoc, getDocs } from 'firebase/firestore';

import './landing.css'
function Header() {
  const navigate = useNavigate()
   const [user, setUser] = useState()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
     setUser(user)

        // ...
      } else {
        // User is signed out
        // ...
        
       
      }
    });
  },[])

   const submit = () => {
    if (user) {
      navigate("/book")

    } else {
      navigate("/login")
    }
   }

  return (
    <div id="main">
        <Navbar />
        <div className="name">
          <h1><span>Surest way to fly</span> With our cheap Airline</h1>
          <p className="details">Travel to anywhere with in the globe with low budget</p>
          <button onClick={submit}><Link  className="cv-btn">Browse  </Link></button>
          
        </div>
    </div>
  )
}

export default Header