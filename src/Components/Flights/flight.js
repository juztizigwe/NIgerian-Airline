import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore';
import './flight.css'
import BookContainer from './BookContainer';
const Flight = (props) => {
    const AvalaibleFlightsRef = collection(db, "AvailableFlights")
    const navigate = useNavigate()
    const [flights, setflights] = useState([])
  

  useEffect(() => {
     const getAvailableFlights = async () => {
      try {
        const data = await getDocs(AvalaibleFlightsRef)
        const filteredData =data.docs.map((doc) => ({
          ...doc.data(),
          id:doc.id
        }));
        
        
        setflights(filteredData)
        console.log(filteredData)
       
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
                ArrivalTime={flight.ArrivalTime}
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
      </div>
    </div>
  )
}

export default Flight
