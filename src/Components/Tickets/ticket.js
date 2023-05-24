import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


import { collection, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';

import './ticket.css'

const Ticket = (props) => {
  const [user, setUser] = useState()
  const [ticketDetail, setTicketDetail] = useState("")
  const {id} = useParams()
  const [dcityid, setdcityid] = useState("")
  const UserRef  = doc(db, "User", id)
  const UserTicketsRef = doc(db, "ticket", id)
  const [departureCity, setDepatureCity] = useState("")
  const [arrivalCity, setArrivalCity] = useState("")


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
    
       setdcityid(ticketDetail.dcityid)
       console.log(ticketDetail)


     } catch(error) {
       console.log(error)
     }

   }
   getUserTickets()
 },[])

 useEffect(() => {
  const getUser = async () => {
   try {
     const data = await getDoc(UserRef)
     .then((doc) =>{
      setUser(doc.data(), doc.id)
     })
  
     setUser(ticketDetail)
     console.log(ticketDetail)


   } catch(error) {
     console.log(error)
   }

 }
 getUser()
},[])

  return (
    <div className="ticket-container">
      <Helmet>
        <title>Ticket</title>
      </Helmet>
        <div className="ticket-con">
          {/*Header*/}
          <img
              src="/playground_assets/rectangle117822-4rii-200h.png"
              alt="Rectangle117822"
              className="ticket-rectangle11"
          />

          <div className="top">
              {/*Logo*/}
              <img
                  src="/playground_assets/logo.png"
                  alt="Logo2"
                  className="logo"
              />

              {/*From-To Small*/}
                <div className="fts">
                <span className="fts-text">
                  <span>{ticketDetail.dcityid}</span>
                </span>
                  <img
                      src="/playground_assets/planeiconw.png"
                      alt="planeiconw"
                      className="planeiconw"
                  />
                  <span className="fts-text">
                  <span>{ticketDetail.acityid}</span>
                </span>
                </div>
          </div>

          <div className="lower">

            <div className="lower-l">
              {/*From-To Big*/}
              <div className="ftb">
            <span className="ftb-text">
              <span>{ticketDetail.dcityid}</span>
            </span>
                <img
                    src="/playground_assets/planeiconb.png"
                    alt="planeiconb.png"
                    className="ticket-planeiconb"
                />
                <span className="ftb-text">
              <span>{ticketDetail.acityid}</span>
            </span>
              </div>

              {/*Customer Detail 1*/}
              <div className="cd">
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
            </div>

            {/*Customer Detail 1*/}
            {/*CName*/}
            <div className="cd1">
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
          </div>





          <img
            src="/playground_assets/line37822-hbubg.svg"
            alt="Line37822"
            className="ticket-line3"
          />
        </div>
      <div className="btn">
        <Link to="/"><span className='btn'>Exit</span></Link>
      </div>
      <div className="btn">
        <Link to="/book"><span className='btn'>Reschedule Flight</span></Link>
      </div>
      <div className="btn">
        <Link to="/"><span className='btn'>Cancel Flight</span></Link>
      </div>
    </div>

  )
}

export default Ticket
