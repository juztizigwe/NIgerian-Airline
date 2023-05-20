import React from 'react'
import Header from './Header'
import Feature from './Feature'
import About from './About'
import aboutImage1 from "../../images/About_1.jpg";
import aboutImage2 from "../../images/About_2.jpg";

function LandingPage() {
  return (
    <div>
      <Header />
      <Feature />
      <About
        image={aboutImage1}
        title="Safest Airline in the world"
        button="Book now"
      />
      <About image={aboutImage2} title="Travel the world" button="Book now" />
    </div>
  )
}

export default LandingPage