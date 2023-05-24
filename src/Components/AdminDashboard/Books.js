import React, { useEffect, useState } from 'react'

import { Helmet } from 'react-helmet'
import { auth } from '../../firebase';
import {onAuthStateChanged, signOut} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


import { collection, addDoc, getDocs, getDoc, doc, setDoc } from 'firebase/firestore';


const Book = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState()
  const [ticketDetails, setTicketDetails] = useState([])
  const {id} = useParams()
  const [dcityid, setdcityid] = useState([])
  // const UserRef  = doc(db, "User", id)
  const AvalaibleBooks = collection(db, "ticket")
  
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
    const getAvailableBooks = async () => {
     try {
       const data = await getDocs(AvalaibleBooks)
       const filteredData =data.docs.map((doc) => ({
         ...doc.data(),
         id:doc.id
       }));
       
       
       setTicketDetails(filteredData)
       console.log(ticketDetails)
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getAvailableBooks()
 },[])
  const logout = async () => {
    try{
      await signOut(auth)
      navigate("/login")
    } catch (err) {
      alert(err.message)
    }
  }

  return (
      <div>
        <Helmet>
          <title>Books</title>
        </Helmet>
        <div className="admin-dashboaed-mainmenu">
          <div className="admin-dashboaed-menu">
            <div className="admin-dashboaed-logo">
              <div className="admin-dashboaed-logo1">
                <div className="admin-dashboaed-frame"></div>
              </div>
            </div>
            <div className="admin-dashboaed-menuitem">
              <div className="admin-dashboaed-menutop">
                <div className="admin-dashboaed-menu1">
                  <img
                      src="/playground_assets/menudashboardi935-e09d.svg"
                      alt="MenuDashboardI935"
                      className="admin-dashboaed-menu-dashboard"
                  />
                  <span className="admin-dashboaed-text ParagraphButtontext">
                    <span><Link to="/admin">Flights</Link></span>
                  </span>
                  <img
                      src="/playground_assets/rectangle5i935-fo1s-200w.png"
                      alt="Rectangle5I935"
                      className="admin-dashboaed-rectangle5"
                  />
                </div>

                <div className="admin-dashboaed-menu3">
                  <div className="admin-dashboaed-menu-booking">
                    <div className="admin-dashboaed-group">
                      <img
                          src="/playground_assets/vectori935-o3z.svg"
                          alt="VectorI935"
                          className="admin-dashboaed-vector"
                      />
                      <img
                          src="/playground_assets/vectori935-ntd7.svg"
                          alt="VectorI935"
                          className="admin-dashboaed-vector1"
                      />
                    </div>
                  </div>
                  <span className="admin-dashboaed-text04 ParagraphBody">
                    <span>Bookings</span>
                  </span>
                </div>
              </div>
              <div className="admin-dashboaed-splitline">
                <img
                    src="/playground_assets/line29357-z8m.svg"
                    alt="Line29357"
                    className="admin-dashboaed-line2"
                />
              </div>
            </div>
          </div>
          <div onClick={logout} className="admin-dashboaed-logout">
            <div className="admin-dashboaed-logout1">
              <div className="admin-dashboaed-frame39997">
                <img
                    src="/playground_assets/logout9359-lhe.svg"
                    alt="Logout9359"
                    className="admin-dashboaed-logout2"
                />
              </div>
              <span className="admin-dashboaed-text10 H4">
                <span>Logout</span>
              </span>
            </div>
          </div>
        </div>


     {
      ticketDetails.map(ticketDetail => 
          <div className="admin-dashboaed-car-availablity">
          <div className="admin-dashboaed-item">
            <div className="admin-dashboaed-frame40181">
              <div className="admin-dashboaed-frame40178">
                <div className="admin-dashboaed-frame40177">
                  <div className="admin-dashboaed-frame40172">
                          <span className="admin-dashboaed-text38 ParagraphP5">
                            <span>01</span>
                          </span>
                    <div className="admin-dashboaed-frame39984">
                            <span className="admin-dashboaed-text40 HeaderH5">
                              <span>{ticketDetail.displayName}</span>
                            </span>
                    </div>
                  </div>
                  <div className="admin-dashboaed-frame39982">
                    <img
                        src="/playground_assets/ellipse79363-pdnq-200h.png"
                        alt="Ellipse79363"
                        className="admin-dashboaed-ellipse7"
                    />
                    <span className="admin-dashboaed-text42">
                            <span>NA {ticketDetail.flightNumber}</span>
                          </span>
                  </div>
                </div>
                <div className="admin-dashboaed-frame39985">
                  <div className="admin-dashboaed-completed">
                    <div className="admin-dashboaed-group1">
                      <img
                          src="/playground_assets/ellipse1i936-yod-200h.png"
                          alt="Ellipse1I936"
                          className="admin-dashboaed-ellipse1"
                      />
                      <img
                          src="/playground_assets/ellipse2i936-cvop-200h.png"
                          alt="Ellipse2I936"
                          className="admin-dashboaed-ellipse2"
                      />
                    </div>
                  </div>
                  <span className="admin-dashboaed-text44 ParagraphP4">
                          <span>{ticketDetail.flightSeat}B</span>
                        </span>
                </div>
              </div>
              <span className="admin-dashboaed-text46 ParagraphP4">
                      <span>{}</span>
                    </span>
            </div>
            <div className="admin-dashboaed-frame39964">
                    <span className="admin-dashboaed-text48">
                      <span>{ticketDetail.dcityid}</span>
                    </span>
                  <span className="admin-dashboaed-text48">
                      <span>{ticketDetail.acityid}</span>
                    </span>
            </div>
          </div>


        </div>
        )
     }
      
      </div>


  );

};

export default Book;



