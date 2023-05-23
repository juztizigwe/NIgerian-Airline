import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

import { collection, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

import './payment.css'

const Payment = (props) => {
  const {id} = useParams()
  const UserFlightsRef = doc(db, "AvailableFlights", id)
  const ticketRef = doc(db, "ticket", id)
  const UserRef  = doc(db, "User", id)
  const [paymentDetail, setPaymentDetail] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cvvNumber, setCvvNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [authId, setauthId] = useState("")
  
 
  const [user, setUser] = useState("")

  const navigate = useNavigate()

  

  const submit =  async() => {
    if (cardNumber.length === 12, cvvNumber.length === 3||4, expiryDate.length === 4 ) {
      alert("proceed")
      console.log(paymentDetail)

      try {
        setDoc(ticketRef, {
          arrivalCity: paymentDetail.ArrivalCity,
          departureCity: paymentDetail.departureCity,
          departureDate: paymentDetail.departureDate,
          departureTime: paymentDetail.departureTime,
          displayName: user.Name,
          flightNumber: Math.floor(Math.random()  * (10 - 1 + 1) +1),
          flightSeat: Math.floor(Math.random()  * (20 - 1 + 1) +1),
          dcityid: paymentDetail.dcityid,
          acityid: paymentDetail.acityid

        }).then(navigate(`/tickets/${id}`))
       
      } catch(e) {
        alert(e.message)
      }
      

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

       
       console.log(paymentDetail)
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getUserFlights()
 },[])

 useEffect(() => {
  const getUser = async () => {
   try {
     const data = await getDoc(UserRef)
     .then((doc) =>{
      setUser(doc.data(), doc.id)
     })

     
     console.log(user)
    
   } catch(error) {
     console.log(error)
   }
  
 }
 getUser()
},[])
  return (
    <div className="payment-container">
      <Helmet>
        <title>Payment</title>
      </Helmet>
      <div className="payment-payment">
        <img
            src="/playground_assets/plane155878-ry7z-500h.png"
            alt="Plane155878"
            className="payment-plane15"
        />
        <div className="payment-cont">
              <div className="payment-body">

                <span className="payment-text">
                  <span>Welcome !</span>
                </span>
                <span className="payment-text">Payment</span>
                <span className="subtitle">
                  <span>
                    Make your payment to schedule your flight
                    <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                    />
                  </span>
                </span>


                <div className="payment-card-details">
                  <div className="label">
                    <span className="subtitle">
                      <span>Card Number</span>
                    </span>

                    <div className="input">
                      <input
                       onChange={(e => setCardNumber(e.target.value))}
                      type='text'
                      className='payment-input'
                      placeholder='xxxxxxxxxxxxxxxxxxxx'
                      />

                      <img
                          src="/playground_assets/plane124720-ysnge-200h.png"
                          alt="Plane124720"
                          className="payment-plane12"
                      />
                    </div>

                  </div>

                  <div className="label">
                    <span className="subtitle">
                      <span>CVV Number</span>
                    </span>

                    <div className="input">
                      <input
                      onChange={(e => setCvvNumber(e.target.value))}
                      type='text'
                      placeholder='Enter the 3 digits or 4 digits on the card'
                      className='payment-input'
                      />

                    </div>
                  </div>

                  <div className="label">
                    <span className="subtitle">
                      <span>Expiry Date</span>
                    </span>

                    <div className="input">
                      <input
                      onChange={(e => setExpiryDate(e.target.value))}
                      className='payment-input'
                      placeholder='12/25'
                      />
                    </div>

                  </div>

                  <button onClick={submit} className="payment-sign-up-button">
                    <span className="payment-submit">
                      <span>Pay Now {paymentDetail.price} </span>
                    </span>
                  </button>
                </div>

                <div className="cancel">
                  <span className="subtitle">
                    Cancel payment?

                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                    <Link to="/book" >
                    <span>Exit</span>
                    </Link>
                </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Payment
