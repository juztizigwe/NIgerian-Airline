import React, {useState, useEffect} from 'react'

import { Helmet } from 'react-helmet'
import {  onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../../firebase';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import Books from "./Books"

import './admin-dashboaed.css'

const AdminDashboaed = (props) => {
  const navigate = useNavigate()
  const [user, setUser] = useState();
  const [admin, setAdmin] = useState()
  const AdminRef = doc(db, "admin", "gXODX6p9aQ3cIQ8gxDzp" );
  const AvalaibleBooks = collection(db, "ticket")
  const AvalaibleFlightsRef = collection(db, "AvailableFlights")
  const [email, setEmail] = useState([])
  const [fromRoute, setFromRoute] = useState("")
  const [toRoute, setToRoute] = useState("")
  const [date, setDate] = useState("")
  const [departureTime, setDepartureTime] = useState("")
  const [arrivalTime, setArrivalTime]  = useState("")
  const [time, setTime] = useState("")
  const [price, setPrice] = useState("")
  const [dcityid, setDcityid] = useState("")
  const [acityid, setAcityid] = useState("")
  const [availableBooks, setAvailableBooks] = useState([])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user)
        // ...
        console.log(user)

      } else {
        // User is signed out
        // ...

        navigate("/login")
      }
    });
  },[])

  useEffect(() => {
    const getAdmin = async () => {
      try {
        const data = await getDoc(AdminRef)
        .then((doc) =>{
         setAdmin(doc.data(), doc.id)
        })
       
         
    
  
     console.log(admin.email)
      
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getAdmin()
 },[])

 const submit = async() => {
  try {
    await addDoc(AvalaibleFlightsRef, {
      ArrivalCity: toRoute,
      departureCity: fromRoute,
      ArrivalTime: arrivalTime,
      Time: time,
      acityid: acityid,
      dcityid: dcityid,
      departureDate: date,
      departureTime: departureTime,
      price: price,
    
  })
  } catch(e) {
    alert(e.message)
  }
   
}

   useEffect(() => {
     const verifyAdmin = async () => {
      try {
      if (admin.email[0]  || admin.email[1] || admin.email[2] === user.email) {
        return
      } else {
        alert("dont come here again")
       navigate("/book")
      }

      } catch(e) {
        console.log(e)
      }
     }
     verifyAdmin()
   },[])
 
   useEffect(() => {
    const getAvailableBooks = async () => {
     try {
       const data = await getDocs(AvalaibleBooks)
       const filteredData =data.docs.map((doc) => ({
         ...doc.data(),
         id:doc.id
       }));
       
       
       setAvailableBooks(filteredData)
      
     } catch(error) {
       console.log(error)
     }
    
   }
   getAvailableBooks()
 },[])

  return (
    <div className="admin-dashboaed-container">
      <Helmet>
        <title>Admin Dashboard</title>
      </Helmet>
      <div className="admin-dashboaed-admin-dashboaed">
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
                    <span>Dashboard</span>
                  </span>
                  <img
                    src="/playground_assets/rectangle5i935-fo1s-200w.png"
                    alt="Rectangle5I935"
                    className="admin-dashboaed-rectangle5"
                  />
                </div>
                <div className="admin-dashboaed-menu2">
                  <img
                    src="/playground_assets/menucari935-sk9r.svg"
                    alt="MenuCarI935"
                    className="admin-dashboaed-menu-car"
                  />
                  <span className="admin-dashboaed-text02">
                    <span>Flight Attendants</span>
                  </span>
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
                <div className="admin-dashboaed-menu4">
                  <img
                    src="/playground_assets/menubelli935-j87.svg"
                    alt="MenuBellI935"
                    className="admin-dashboaed-menu-bell"
                  />
                  <span className="admin-dashboaed-text06 ParagraphBody">
                    <span>Notifications</span>
                  </span>
                </div>
                <div className="admin-dashboaed-menu5">
                  <img
                    src="/playground_assets/menusettingsi935-u7o.svg"
                    alt="MenuSettingsI935"
                    className="admin-dashboaed-menu-settings"
                  />
                  <span className="admin-dashboaed-text08 ParagraphBody">
                    <span>Settings</span>
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
          <div className="admin-dashboaed-logout">
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
        <div className="admin-dashboaed-car-availablity">
          <div className="admin-dashboaed-header">
            <span className="admin-dashboaed-text12 HeaderH4">
              <span>Flight Availablity</span>
            </span>
          </div>
          <div className="admin-dashboaed-input">
            <div className="admin-dashboaed-frame40166">
              <div className="">
                
                <input
                className='admin-dashboaed-input1'
                placeholder='From route'
                onChange={(e => setFromRoute(e.target.value))}
                />
              </div>
              <div className="admin-dashboaed-input2">
                <input 
                type='text'
                placeholder='To Route'
                onChange={(e => setToRoute(e.target.value))}
                />
                <br />
                
              </div>
              <div className="admin-dashboaed-datetime">
                <div className="admin-dashboaed-frame21 admin-dashboaed-frame21">
                  <div className="admin-dashboaed-input3">
                    <input
                    type='date'
                    onChange={(e => setDate(e.target.value))}
                    />
                  </div>
                  <div className="admin-dashboaed-input4">
                    <input 
                    type='text'
                    placeholder='Departure Time'
                    onChange={(e => setDepartureTime(e.target.value))}
                    />
                  </div>
                </div>
              </div>
             < div className="admin-dashboaed-datetime">
                <div className="admin-dashboaed-frame21 admin-dashboaed-frame21">
                  <div className="admin-dashboaed-input3">
                    <input
                    placeholder='Arrival Time'
                    onChange={(e => setArrivalTime(e.target.value))}
                    />
                  </div>
                  <div className="admin-dashboaed-input4">
                    <input 
                    type='text'
                    onChange={(e => setTime(e.target.value))}
                    placeholder='Time'
                    />
                  </div>
                </div>
                <div>
                  <input 
                  className='admin-dashboaed-input3'
                  placeholder='Price'
                  onChange={e => setPrice(e.target.value)}
                  />
                  
                </div>
                <div className="admin-dashboaed-frame21 admin-dashboaed-frame21">
                  <div className="admin-dashboaed-input3">
                    <input
                    placeholder='dcityid'
                    onChange={(e => setDcityid(e.target.value))}
                    />
                  </div>
                  <div className="admin-dashboaed-input4">
                    <input 
                    type='text'
                    placeholder='acityid'
                    onChange={(e => setAcityid(e.target.value))}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button onClick={submit} className="admin-dashboaed-frame40123">
              <span className="admin-dashboaed-text22">
                <span>Set</span>
              </span>
            </button>
          </div>
        </div>
        
        <div className="admin-dashboaed-live-flight-status">
          <div className="admin-dashboaed-live-car-status">
            <div className="admin-dashboaed-header1">
              <div className="admin-dashboaed-frame40248">
                <span className="admin-dashboaed-text24 HeaderH4">
                  <span> User Status</span>
                </span>
                <div className="admin-dashboaed-filter">
                  <img
                    src="/playground_assets/filteri936-gae.svg"
                    alt="FilterI936"
                    className="admin-dashboaed-filter1"
                  />
                  <div className="admin-dashboaed-frame40058">
                    <span className="admin-dashboaed-text26 ParagraphButtontext">
                      <span>Filter</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="admin-dashboaed-frame40191">
                <div className="admin-dashboaed-frame40190">
                  <div className="admin-dashboaed-frame40189">
                    <div className="admin-dashboaed-frame40188">
                      <span className="admin-dashboaed-text28">
                        <span>No.</span>
                      </span>
                      <span className="admin-dashboaed-text30 Paragraph">
                        <span>Plane</span>
                      </span>
                    </div>
                    <span className="admin-dashboaed-text32 Paragraph">
                      <span>User</span>
                    </span>
                  </div>
                  <span className="admin-dashboaed-text34 Paragraph">
                    <span>Status</span>
                  </span>
                </div>
                <span className="admin-dashboaed-text36 Paragraph">
                  <span>Payment</span>
                </span>
              </div>
            </div>
            {
              
                availableBooks.map(book => 
                  <Books
                   planeNumber={book.flightNumber}
                   displayName={book.displayName}
                   seat={book.flightSeat}
                   departureTime={book.departureTime}
                  />
                  )
            }
            
          </div>
          <img
            src="/playground_assets/scrollbar9367-mr5d-200w.png"
            alt="Scrollbar9367"
            className="admin-dashboaed-scrollbar"
          />
        </div>
      </div>
    </div>
  )
}

export default AdminDashboaed
