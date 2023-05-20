import React, { useState } from 'react'
import plane from '../../images/Plane 1 2.png'
import Navbar from '../LandingPage/Navbar'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase'
import { useNavigate } from "react-router-dom";

import './Login.css'

function Login() {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    

    const handleLogin = (e) => {
      e.preventDefault()
       try {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          navigate("/book")
           
          const user = userCredential.user;
          // ...
          
        })
      
         .catch((error) => {
          alert(error.message)
         })
       }
      catch(error) {
         const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
      }
    }

  return (
   

    
    <div className="login">
       <Navbar />
        
       <div className="login__image1">
        <img src={plane} alt="plane" />
       </div>
       <div className="form-box">
          <div>
          <h1 className="login_title">Welcome</h1>
        <h1 className="login_title1">Sign In</h1>
        <h4 className="login_title2">Log into your account to proceed</h4>
          </div>
        
        <form onSubmit={handleLogin} className="login__group">
           <div className="login__field1">
            <h5>Email</h5>
            <input type="email" placeholder="Name" className=" " onChange={(e) => setEmail(e.target.value)}></input>
           </div>
        
           
           <div className="login__field3">
            <h5>Password</h5>
            <input type="password" placeholder="Password" className="" onChange={(e) => setPassword(e.target.value)}></input>
           </div>
           <button className="login__button"><div className="login__text">Login</div></button>
            <div className="info">Don't have an account <strong><a href="/register">Register</a></strong></div>
        </form>
       </div>
    </div>
   
  )
}

export default Login