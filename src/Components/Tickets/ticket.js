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
              src="/playground_assets/logo28024-h64-200h.png"
              alt="Logo28024"
              className="ticket-logo2"
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
            <span className="ticket-text19">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <img
                src="/playground_assets/planeiconb.png"
                alt="PlaneIcon18022"
                className="ticket-plane-icon1"
            />
            <span className="ticket-text21">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>

          {/*From-To Big*/}
          <div className="ftb">
            <span className="ticket-text23">
              <span>{ticketDetail.departureCity}</span>
            </span>
            <img
                src="/playground_assets/planeiconb.png"
                alt="planeiconb.png"
                className="ticket-planeiconb"
            />
            <span className="ticket-text25">
              <span>{ticketDetail.arrivalCity}</span>
            </span>
          </div>

          {/*Customer Detail*/}
          <div className="ticket-frame40256">
            {/*Name*/}
            <div className="ticket-frame40252">
              <span className="ticket-text">
                <span>Name</span>
              </span>
              <span className="ticket-text02">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>

            {/*Flight*/}
            <div className="ticket-frame40253">
              <span className="ticket-text04">
                <span>Flight</span>
              </span>
              <span className="ticket-text06">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>

            {/*Seat*/}
            <div className="ticket-frame40254">
              <span className="ticket-text08">
                <span>Seat</span>
              </span>
              <span className="ticket-text10">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>

          </div>

          {/*Name*/}
          <div className="ticket-frame40259">
            <div className="ticket-frame402521">
              <span className="ticket-text27">
                <span>Name</span>
              </span>
              <span className="ticket-text29">
                <span>{ticketDetail.displayName}</span>
              </span>
            </div>

            {/*Flight*/}
            <div className="ticket-frame402531">
              <span className="ticket-text31">
                <span>Flight</span>
              </span>
              <span className="ticket-text33">
                <span>NA {ticketDetail.flightNumber}</span>
              </span>
            </div>

            {/*Seat*/}
            <div className="ticket-frame402541">
              <span className="ticket-text35">
                <span>Seat</span>
              </span>
              <span className="ticket-text37">
                <span>{ticketDetail.flightSeat}B</span>
              </span>
            </div>

            {/*Departure*/}
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
