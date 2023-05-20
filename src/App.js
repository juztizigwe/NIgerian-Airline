import React, { useEffect, useState } from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./Components/Contact/Form";
import Login from "./Components/Authentication/Login";
import SignUp from "./Components/Authentication/SignUp";
import BookFlight from "./Components/Booking/BookFlight";
import Booking from "./Components/Booking/Bookings";
import Flight from "./Components/Flights/flight";
import Ticket from "./Components/Tickets/ticket";
import Payment from "./Components/Payment/payment";
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';


const App = () => {
  const [flightId, setFlightId] = useState([])
  const [id, setId] = useState([])
  const AvalaibleFlightsRef = collection(db, "AvailableFlights")
  useEffect(() => {
    const getAvailableFlights = async () => {
     try {
       const data = await getDocs(AvalaibleFlightsRef)
       const filteredData =data.docs.map((doc) => ({
         ...doc.data(),
         id:doc.id,
       }));
       
       
       setFlightId(filteredData)
      //  console.log(flightId)
    
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getAvailableFlights()
 },[])
  return (
    
    <Router>
     
      <Routes>
        
        <Route path="/home" element={<LandingPage />} />
        <Route path="/contact" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/book" element={<Booking />} />
        <Route path="flights" element={<Flight />} />
        <Route path="tickets/:id" element={<Ticket />} />
        <Route path="/payment/:id" element={<Payment />} />
         
         {/* {
          flightId.map(x => <Route  path={`payment/:${x.id}`} element={<Payment />} />)
         } */}
        
        
      </Routes>
    </Router>
  );
};

export default App;
