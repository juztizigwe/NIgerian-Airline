import React from 'react'
import './landing.css'

function About(props) {
  return (
    <div id="about">
       <div className="about-image">
           <img src={props.image} alt="" />
       </div>
       <div className="about-text">
    <h2>{props.title}</h2>
    <p>Nigerian Air is a Nigerian airline operating mainly from two hubs at Murtala Muhammed International Airport in Lagos and Nnamdi Azikiwe International Airport in Abuja. Arik Air's head office is the Arik Air Aviation Center on the grounds of Murtala Muhammed International Airport in Ikeja</p>
      <button>{props.button}</button>
       </div>
    </div>
  )
}

export default About