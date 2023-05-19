import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';

import { collection, addDoc, getDocs } from 'firebase/firestore';

import './flight.css'
import BookContainer from './BookContainer';

const Flight = (props) => {
    const AvalaibleFlightsRef = collection(db, "AvailableFlights")
    const navigate = useNavigate()
    const [flights, setflights] = useState([])
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
     
        // ...
      } else {
        // User is signed out
        // ...

        navigate("/login")
      }
    });
  },[])

  useEffect(() => {
     const getAvailableFlights = async () => {
      try {
        const data = await getDocs(AvalaibleFlightsRef)
        const filteredData =data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id,
        }));
        
        
        setflights(filteredData)
       
      } catch(error) {
        console.log(error)
      }
     
    }
    getAvailableFlights()
  },[])
  return (
    <div className="flight-container">
      <Helmet>
        <title>Available Flights</title>
      </Helmet>
      <div className="flight-flight">
        <img
          src="/playground_assets/plane122299-4lcl-1000w.png"
          alt="Plane122299"
          className="flight-plane12"
        />

        
        <div className="flight-cont">
          <div className="flight-flights">
            {
              flights.map(flight => 
                <BookContainer
                ArrivalCity={flight.ArrivalCity}
                departureCity={flight.departureCity}
                price={flight.price}
                flightTime={flight.Time}
                 departureTime={flight.departureTime}
                id={flight.id}
                key={flight.id}
                />
                )
            }
        

          </div>
          <span className="flight-text56">
            <span>Available Flights</span>
          </span>
        </div>
        <img
          src="/playground_assets/plane23219-xhr-300h.png"
          alt="Plane23219"
          className="flight-plane2"
        />
      </div>
    </div>
  )
}

export default Flight
