import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';

import './payment.css'

const Payment = (props) => {
  const {id} = useParams()
  const UserFlightsRef = doc(db, "AvailableFlights", id)
  const ticket = collection(db, "ticket")
  const [paymentDetail, setPaymentDetail] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cvvNumber, setCvvNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [user, setUser] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
          setPaymentDetail(user)
        // ..
        console.log(user)
      } else {
        // User is signed out
        // ...

        navigate("/login")
      }
    });
  },[])

  const submit =  async() => {
    if (cardNumber.length === 12, cvvNumber.length === 3||4, expiryDate.length === 4 ) {
      alert("proceed")

      try {
        await addDoc(ticket, {
          
        
        
      })
      } catch(e) {
        alert(e.message)
      }
       navigate("/flights")

    }
    else {
      alert("wrong")
    }
  }

  

  useEffect(() => {
    const getUserFlights = async () => {
     try {
       const data = await getDoc(UserFlightsRef)
       .then((doc) =>{
        setPaymentDetail(doc.data(), doc.id)
       })

       
      //  console.log(filteredData)
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getUserFlights()
 },[])

  return (
    <div className="payment-container">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="payment-payment">
        
        <img
          src="/playground_assets/plane134719-laz-500h.png"
          alt="Plane134719"
          className="payment-plane13"
        />
        <div className="payment-frame5"></div>
        <div className="payment-sign-up-cont">
          <div className="payment-cont">
            <div className="payment-body">
              <div className="payment-signin">
                <span className="payment-text">
                  <span>Pamyment</span>
                </span>
                <span className="payment-text02">
                  <span>
                    Make your payment to schedule your flight
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <span className="payment-text04">
                <span>Welcome !</span>
              </span>
              <div className="payment-card-details">
                <div className="payment-card-number">
                  <span className="payment-text06">
                    <span>Card Number</span>
                  </span>
                  <div className="payment-group20">
                    <input 
                     onChange={(e => setCardNumber(e.target.value))}
                    type='text'
                    className='payment-rectangle4'
                    placeholder='xxxxxxxxxxxxxxxxxxxx'
                    />
                    
                  </div>
                  <img
                    src="/playground_assets/plane124720-ysnge-200h.png"
                    alt="Plane124720"
                    className="payment-plane12"
                  />
                </div>
                <div className="payment-cvv">
                  <span className="payment-text10">
                    <span>CVV Number</span>
                  </span>
                  <div className="payment-group201">
                  <input
                  onChange={(e => setCvvNumber(e.target.value))}
                  type='text'
                  placeholder='Enter the 3 digits or 4 digits on the card'
                  className='payment-rectangle41'
                  />
                  
                    <span className="payment-text12">
                      <span></span>
                    </span>
                  </div>
                </div>
                <div className="payment-expiry-date">
                  <span className="payment-text14">
                    <span>Expiry Date</span>
                  </span>
                  <div className="payment-group202">
                    <input
                    onChange={(e => setExpiryDate(e.target.value))}
                    className='payment-rectangle42'
                    placeholder='12/25'
                    />
                    
                  </div>
                </div>
                
                <button onClick={submit} className="payment-sign-up-button">
                  <span className="payment-text22">
                    <span>Pay Now {paymentDetail.price} </span>
                  </span>
                </button>
              </div>
              <span className="payment-text24">
                <span className="payment-text25">
                  Cancel payment?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                  <Link to="/book" >
                  <span>Booking</span>
                  </Link>
                
              </span>
            </div>
          </div>
        </div>
        <img
          src="/playground_assets/plane124923-zuk-500h.png"
          alt="Plane124923"
          className="payment-plane121"
        />
        <img
          src="/playground_assets/plane145877-0da-500h.png"
          alt="Plane145877"
          className="payment-plane14"
        />
        <img
          src="/playground_assets/plane155878-ry7z-500h.png"
          alt="Plane155878"
          className="payment-plane15"
        />
      </div>
    </div>
  )
}

export default Payment
