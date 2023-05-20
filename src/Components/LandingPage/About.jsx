import React, {useState, useEffect} from 'react'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';



import { collection, addDoc, getDocs } from 'firebase/firestore';

import './landing.css'

function About(props) {
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
    <div id="about">
       <div className="about-image">
           <img src={props.image} alt="" />
       </div>
       <div className="about-text">
    <h2>{props.title}</h2>
    <p>Nigerian Air is a Nigerian airline operating mainly from two hubs at Murtala Muhammed International Airport in Lagos and Nnamdi Azikiwe International Airport in Abuja. Arik Air's head office is the Arik Air Aviation Center on the grounds of Murtala Muhammed International Airport in Ikeja</p>
      <button style={{cursor: 'pointer'}} onClick={submit}>{props.button}</button>
       </div>
    </div>
  )
}

export default About