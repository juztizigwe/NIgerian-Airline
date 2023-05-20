import React, { useEffect, useState } from 'react'
import Plane1 from '../../images/Plane 1 1.png'
import Plane2 from '../../images/Plane 1 2.png'
import { Helmet } from 'react-helmet'
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';

import { collection, addDoc, getDocs } from 'firebase/firestore';


import './booking.css'
import { auth } from '../../firebase';
import Navbar from "../LandingPage/Navbar";

const Booking = (props) => {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  const [startPoint, setStartPoint] = useState([])
  const [finishPoint, setFinishPoint] = useState([])
  const [fromTrip, setFromTrip] = useState()
  const [toTrip, setToTrip] = useState()
  const [departure, setDeparture] =useState()
  const [returnDate, setReturnDate] = useState()
  const [traveller, setTraveller] = useState()
  const flightRouteRef = collection(db, "flightRoute")
  const preBookDetaiRef = collection(db, "PreBookDetails")

  const roundTrip = (e) => {
    setClicked(true)
    alert(e.target.value)
    alert(fromTrip)
   
  }

  const submit = async() => {
    try {
      await addDoc(preBookDetaiRef, {
      RoundTrip: clicked,
      departure: departure,
      return: returnDate,
      from: fromTrip,
      to: toTrip,
      
    })
    } catch(e) {
      alert(e.message)
    }
     navigate("/flights")
  }
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
       console.log(user)

          // ...
        } else {
          // User is signed out
          // ...
          
          navigate("/login")
        }
      });
    },[])

    useEffect(() => {
       const getFlightRoute = async () => {
        try {
          const data = await getDocs(flightRouteRef)
          const filteredData =data.docs.map((doc) => ({
            ...doc.data(),
            id:doc.id,
          }));
          
          setStartPoint(filteredData[0].from)
          setFinishPoint(filteredData[0].to)
          console.log(filteredData)
        } catch(error) {
          console.log(error)
        }
       
      }
      getFlightRoute()
    },[])

  return (
     <div>
    <Navbar/>
    <div className="booking-container">
      <Helmet>
        <title>Bookings</title>
      </Helmet>
      <div className="booking-booking">
        <img
          src=
          {Plane1}
          alt="Plane122251"
          className="booking-plane12"
        />
        <div className="booking-cont">
          <div className="booking-body">
            <span className="booking-text">
              <span>Book A Flight</span>
            </span>
            <div className="booking-inputs">
              <div className="booking-fromto" >
                <div className="booking-to">
                  
                <select value={toTrip} className='booking-rectangle4' onChange={((e) => setToTrip(e.target.value))}>

                  {
                    finishPoint.map(opt => <option>{opt}</option>)
                  }
                        </select>
                  
                  <div className="booking-frameiconlocation">
                    <img
                      src="/playground_assets/vector2319-mjs.svg"
                      alt="Vector2319"
                      className="booking-vector"
                    />
                  </div>
                  <span className="booking-text04">
                    <span>To</span>
                  </span>
                </div>
                <div className="booking-from">
                <select value={fromTrip} className='booking-rectangle4' onChange={((e) => setFromTrip(e.target.value))}>

              {
                startPoint.map(opt => <option>{opt}</option>)
              }

                 </select>
                  
                  <div className="booking-frameiconlocation1">
                    <img
                      src="/playground_assets/vector324-48um.svg"
                      alt="Vector324"
                      className="booking-vector1"
                    />
                  </div>
                  <span className="booking-text08">
                    <span>From</span>
                  </span>
                </div>
                <div className="booking-frameiconshare">
                  <img
                    src="/playground_assets/vector327-jivn.svg"
                    alt="Vector327"
                    className="booking-vector2"
                  />
                </div>
              </div>
              <div className="booking-date">
                <div className="booking-group22">
                  <span className="booking-text10">
                    <span>Departure</span>
                  </span>
                  <div className="booking-group20">
                    <input
                    onChange={((e) => setDeparture(e.target.value))}
                    type='date'
                    className='booking-rectangle42'
                    />
                   
                  </div>
                </div>
              </div>
              <div className="booking-book">
               <button className='booking-rectangle6' onClick={submit}>
               <span className="booking-text14">
                  <span>
                    <span>Check For Flights</span>
                    <br></br>
                    <span></span>
                  </span>
                </span>
               </button>
                
              </div>
            </div>
            <div className="booking-trip-type">
              <img
                src="/playground_assets/rectangle72291-m2vq-200h.png"
                alt="Rectangle72291"
                className="booking-rectangle7"
              />
              <img
                src="/playground_assets/rectangle82293-pfm-200h.png"
                alt="Rectangle82293"
                className="booking-rectangle8"
              />
              <div className="booking-component1">
               <input type='radio' className='booking-ellipse1' />
                
              </div>
              <input

              onClick={roundTrip}
              value="round trip"
              type='radio'
                className="booking-ellipse3"
              />
              <span className="booking-text19">
                <span>One-way</span>
              </span>
              <span className="booking-text21">
                <span>Round trip</span>
              </span>
            </div>
          </div>
        </div>
        <div className="booking-passeger">
          <div className="booking-group221">
            <span className="booking-text23">
              <span>
                <span>Traveller</span>
                <br></br>
                <span></span>
              </span>
            </span>
            {clicked && (
               <div className="booking-date1">
                <div className="booking-groups22">
                  <span className="booking-text10">
                    <span>Return</span>
                  </span>
                  <div className="booking-group20">
                    <input 
                    onChange={((e) => setReturnDate(e.target.value))}
                    type='date'
                    className='booking-rectangle42'
                    />
                   
                  </div>
                </div>
              </div>
            )}
            
            <div className="booking-group201">
              <select className='booking-rectangle43' value={traveller} onChange={((e)=> setTraveller(e.target.value))}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              
              
            </div>
          </div>
        </div>
        {/* <img
          src={Plane2}
          alt="Plane23218"
          className="booking-plane2"
        /> */}
      </div>
      
    </div>
     </div>
  )
}

export default Booking
