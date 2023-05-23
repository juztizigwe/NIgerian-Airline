import {Helmet} from "react-helmet";
import {Link} from "react-router-dom";
import React, {useState, useEffect} from 'react'

import {auth} from "../../firebase";
import {onAuthStateChanged} from "firebase/auth";
import {useNavigate} from "react-router-dom";
import {db} from "../../firebase";
import {useParams} from "react-router-dom";
import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";

import './../Payment/payment.css'
// import * as path from "path";

const Bio = (props) => {
    const {id} = useParams()
    const [user, setUser] = useState();
    const User = collection(db,  "User")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const navigate = useNavigate()
    const submit = async() => {
        try {
            await addDoc(User, {
                Name: name,
                Email: email,
                Age: age,
                PhoneNumber: number,

            }).then(navigate('/Payment'))
        } catch(e) {
            alert(e.message)
        }

    }

return (
    <div className="payment-container">
        <Helmet>
            <title>Bio</title>
        </Helmet>
        <div className="payment-payment">
            <img
                src="/playground_assets/plane155878-ry7z-500h.png"
                alt="Plane155878"
                className="payment-plane15"
            />
            <div className="payment-cont">
                <div className="payment-body">

                    <span className="payment-text">
                      <span>Welcome!</span>
                    </span>
                    <span className="payment-text">Bio</span>
                    <span className="subtitle">
                        Fill in your details
                    </span>


                    <div className="payment-card-details">
                        <div className="label">
                            <span className="subtitle">
                                <span>Name</span>
                            </span>

                            <div className="input">
                                <input
                                    onChange={(e => setName(e.target.value))}
                                    type='text'
                                    className='payment-input'
                                    placeholder='John Doe'
                                />
                            </div>
                        </div>

                        <div className="label">
                            <span className="subtitle">
                                <span>Email</span>
                            </span>

                            <div className="input">
                                <input
                                    onChange={(e => setEmail(e.target.value))}
                                    type='email'
                                    placeholder='myemail@email.com'
                                    className='payment-input'
                                />

                            </div>
                        </div>

                        <div className="label">
                            <span className="subtitle">
                                <span>Age</span>
                            </span>

                            <div className="input">
                                <input
                                    onChange={(e => setAge(e.target.value))}
                                    type='number'
                                    className='payment-input'
                                    placeholder='18'
                                />
                            </div>
                        </div>


                        <div className="label">
                            <span className="subtitle">
                                <span>Phone Number</span>
                            </span>

                            <div className="input">
                                <input
                                    onChange={(e => setNumber(e.target.value))}
                                    type='tel'
                                    className='payment-input'
                                    placeholder='+234 801 2345 678'
                                />
                            </div>
                        </div>

                        <button onClick={submit} className="payment-sign-up-button">
                            <span className="payment-submit">
                                <span>Proceed </span>
                            </span>
                        </button>
                    </div>

                        <div className="cancel">
                      <span className="subtitle">
                        Cancel payment?
                      </span>
                            <Link to="/book" >
                                <span>Exit</span>
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Bio