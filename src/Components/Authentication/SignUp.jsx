import React, {useEffect, useState} from "react";
import plane from "../../images/Plane 1 2.png";
import Navbar from "../LandingPage/Navbar";
import {auth} from '../../firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import './SignUp.css'



function SignUp() {
const navigate = useNavigate()

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [user, setUser] = useState()
  
  const handleChange = (e) => {
  }

  const SignIn = async(e) => {
    e.preventDefault()
    try{
      await createUserWithEmailAndPassword(auth, email, password).then((userCredential) =>
      {
        const user = userCredential.user;
        setUser(user)
      }).then(user && navigate("/login"))
    }
    catch(e) { alert(e.message)}
    navigate("/login")
    
  }
  useEffect(() => {
     if (auth?.currentUser?.email ) {
      navigate("/book")
      console.log(auth?.currentUser?.email )
     }
  },[]) 
  

  return (
    <div className="sign__Up">
      <Navbar />
      <div className="login__image1">
        <img src={plane} alt="plane" />
      </div>
      <div className="form-box">
        <div>
          <h1 className="signUp_title">Welcome</h1>
          <h1 className="signUp_title1">Sign In</h1>
          <h4 className="signUp_title2">Let get you an account</h4>
        </div>

        <form onSubmit className="input__group">
        <h5 className="signUp_title3">Name</h5>

          <div className="input__field1">
            <div className="input_firstName"> 
            <input
           
              type="text"
              placeholder="First name"
              className=" "
              onChange={handleChange}
            ></input>
            </div>
           
            <div className="input_lastName">
            <input
            
              type="text"
              placeholder="Last name"
              className=" "
              onChange={handleChange}
            ></input>
            </div>
             
          </div>
          
          <div className="input__field2">
            
            <input
            
              type="email"
              placeholder="Email"
              className=" "
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            
             <input
            
              type="number"
              placeholder="Phone number"
              className=" "
              onChange={handleChange}
            ></input>
          </div>
          <h5 className="signUp__title4">Address</h5>
          <div className="input__field3">
            
            <input
           
              type="text"
              placeholder="Address"
              className=" "
              onChange={handleChange}
            ></input>
           
          </div>
          <h5 className="signUp__title5">Password</h5>
          <div className="input__field4">
            
            <input
              type="password"
              placeholder="Password"
              className=""
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button className="login__button" onClick={SignIn}>
            <div className="login__text">Register</div>
          </button>
          <div className="info">
           Have an account?{" "}
            <strong>
              <a href="/login">Login</a>
            </strong>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
