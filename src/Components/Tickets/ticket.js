import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';

import { collection, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

import './ticket.css'

const Ticket = (props) => {
  const [user, setUser] = useState()
  const [ticketDetail, setTicketDetail] = useState("")
  const {id} = useParams()
  const UserTicketsRef = doc(db, "tickets", id)
  const [departureCity, setDepatureCity] = useState("")

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
          
        // ..
        setUser(user)
      } else {
        // User is signed out
        // ...

        
      }
    });
  },[])
  useEffect(() => {
    const getUserTickets = async () => {
     try {
       const data = await getDoc(UserTicketsRef)
       .then((doc) =>{
        setTicketDetail(doc.data(), doc.id)
       })
     console.log(ticketDetail)
       setDepatureCity(ticketDetail.departureCity)
      
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getUserTickets()
 },[])

  return (
    <div className="ticket-container">
      <Helmet>
        <title>Ticket</title>
      </Helmet>
      <div className="ticket-ticket">
        <div className="ticket-con">
          {/*Header*/}
          <img
              src="/playground_assets/rectangle117822-4rii-200h.png"
              alt="Rectangle117822"
              className="ticket-rectangle11"
          />

          {/*Logo*/}
          <img
              src="/playground_assets/logo.png"
              alt="Logo28024"
              className="logo"
          />

          {/*BG Plane*/}
          <img
            src="/playground_assets/plane168126-q36-1100w.png"
            alt="Plane168126"
            className="ticket-plane16"
          />

          {/*Plane Icon Bg*/}

          {/*From-To Small*/}
          <div className="fts">
            <span className="fts-text">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <img
                src="/playground_assets/planeiconw.png"
                alt="Pplaneiconw"
                className="planeiconw"
            />
            <span className="fts-text">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>

          {/*From-To Big*/}
          <div className="ftb">
            <span className="ftb-text">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <img
                src="/playground_assets/planeiconb.png"
                alt="planeiconb.png"
                className="ticket-planeiconb"
            />
            <span className="ftb-text">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>

          {/*Customer Detail*/}
          <div className="customer-details">
            {/*Name*/}
            <div className="c-object">
              <span className="c-text">
                <span>Name</span>
              </span>
              <span className="c-text2">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>

            {/*Flight*/}
            <div className="c-object">
              <span className="c-text">
                <span>Flight</span>
              </span>
              <span className="c-text2">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>

            {/*Seat*/}
            <div className="c-object">
              <span className="c-text">
                <span>Seat</span>
              </span>
              <span className="c-text2">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>
          </div>

          {/*CName*/}
          <div className="customer-details1">
            <div className="c-object">
              <span className="c-text">
                <span>Name</span>
              </span>
              <span className="c-text2">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>

            {/*Flight*/}
            <div className="c-object">
              <span className="c-text">
                <span>Flight</span>
              </span>
              <span className="c-text2">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>

            {/*Seat*/}
            <div className="c-object">
              <span className="c-text">
                <span>Seat</span>
              </span>
              <span className="c-text2">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>

            {/*Departure*/}
            <div className="c-object">
              <span className="c-text">
                <span>Departure</span>
              </span>
              <span className="c-text2">
                  <span>
                    {ticketDetail.departureTime}
                    <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                    />
                  </span>
              </span>
            </div>
          </div>
          {/*Customer Detail End*/}



          <img
            src="/playground_assets/line37822-hbubg.svg"
            alt="Line37822"
            className="ticket-line3"
          />
        </div>
      </div>
    </div>
  )
}

export default Ticket
