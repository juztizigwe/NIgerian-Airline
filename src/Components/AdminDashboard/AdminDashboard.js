import React, {useState, useEffect} from 'react'

import { Helmet } from 'react-helmet'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, db } from '../../firebase';
import { collection, addDoc, getDocs, getDoc, doc } from 'firebase/firestore';
import { Link } from 'react-router-dom'

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
    
  }).then(alert("Succesful"))
  } catch(e) {
    alert(e.message)
  }
   
}

   // useEffect(() => {
   //   const verifyAdmin = async () => {
   //    try {
   //    if (admin.email[0]  || admin.email[1] || admin.email[2] === user.email) {
   //      return
   //    } else {
   //      alert("dont come here again")
   //     navigate("/book")
   //    }
   //
   //    } catch(e) {
   //      console.log(e)
   //    }
   //   }
   //   verifyAdmin()
   // },[])
 
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
    const logout = async () => {
      try{
        await signOut(auth)
        navigate("/login")
      } catch (err) {
        alert(err.message)
      }
    }  

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
                    <span>Flights</span>
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
                    <span><Link  to="/bookings">Bookings</Link></span>
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
        {/*Navbar End*/}


        <div className="admin-dashboaed-car-availablity">
          <div className="admin-dashboaed-header">
            <span className="admin-dashboaed-text12 HeaderH4">
              <span> Create A Flight </span>
            </span>
          </div>
          <div className="admin-dashboaed-input">
            <div className="admin-dashboaed-frame40166">
              <div className="">

                <input
                className='admin-dashboaed-input1'
                placeholder='From '
                onChange={(e => setFromRoute(e.target.value))}
                />
              </div>
              <div className="admin-dashboaed-input2">
                <input
                type='text'
                placeholder='To '
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
                    type='time'
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
                    type='time'
                    placeholder='Arrival Time'
                    onChange={(e => setArrivalTime(e.target.value))}
                    />
                  </div>
                  <div className="admin-dashboaed-input4">
                    <input
                    type='Text'
                    onChange={(e => setTime(e.target.value))}
                    placeholder='Duration'
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
      </div>
    </div>
  )
}

export default AdminDashboaed
