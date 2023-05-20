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
        <img
          src="/playground_assets/plane124499-ecii-1000w.png"
          alt="Plane124499"
          className="ticket-plane12"
        />
        <div className="ticket-cont">
          <img
            src="/playground_assets/rectangle34410-0oos-1000w.png"
            alt="Rectangle34410"
            className="ticket-rectangle3"
          />
          <img
            src="/playground_assets/plane168126-q36-1100w.png"
            alt="Plane168126"
            className="ticket-plane16"
          />
          <img
            src="/playground_assets/pngtransparentairplanecomputericonsaircrafticona5f8023-8o79-200h.png"
            alt="pngtransparentairplanecomputericonsaircrafticona5f8023"
            className="ticket-pngtransparentairplanecomputericonsaircrafticona5f"
          />
          <img
            src="/playground_assets/rectangle117822-4rii-200h.png"
            alt="Rectangle117822"
            className="ticket-rectangle11"
          />
          <div className="ticket-frame40256">
            <div className="ticket-frame40252">
              <span className="ticket-text">
                <span>Name</span>
              </span>
              <span className="ticket-text02">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>
            <div className="ticket-frame40253">
              <span className="ticket-text04">
                <span>Flight</span>
              </span>
              <span className="ticket-text06">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>
            <div className="ticket-frame40254">
              <span className="ticket-text08">
                <span>Seat</span>
              </span>
              <span className="ticket-text10">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>
         
          </div>
          <div className="ticket-frame40257">
            <span className="ticket-text19">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <img
              src="/playground_assets/planeicon18022-38oq-200h.png"
              alt="PlaneIcon18022"
              className="ticket-plane-icon1"
            />
            <span className="ticket-text21">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>
          <div className="ticket-frame40258">
            <span className="ticket-text23">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <span className="ticket-text25">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>
          <div className="ticket-frame40259">
            <div className="ticket-frame402521">
              <span className="ticket-text27">
                <span>Name</span>
              </span>
              <span className="ticket-text29">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>
            <div className="ticket-frame402531">
              <span className="ticket-text31">
                <span>Flight</span>
              </span>
              <span className="ticket-text33">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>
            <div className="ticket-frame402541">
              <span className="ticket-text35">
                <span>Seat</span>
              </span>
              <span className="ticket-text37">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>
            <div className="ticket-frame402551">
              <span className="ticket-text39">
                <span>Departure</span>
              </span>
              <span className="ticket-text41">
                <span>
                  <span>
                   {/* {ticketDetail.departureDate} */}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    {ticketDetail.departureTime}
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </div>
          </div>
          <img
            src="/playground_assets/logo28024-h64-200h.png"
            alt="Logo28024"
            className="ticket-logo2"
          />
          <img
            src="/playground_assets/line37822-hbubg.svg"
            alt="Line37822"
            className="ticket-line3"
          />
        </div>
        <img
          src="/playground_assets/plane24416-ytlc-300h.png"
          alt="Plane24416"
          className="ticket-plane2"
        />
      </div>
    </div>
  )
}

export default Ticket
