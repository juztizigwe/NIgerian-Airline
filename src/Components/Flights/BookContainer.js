import React from "react";
import { useNavigate } from "react-router-dom";

import './flight.css'



const BookContainer = ({departureCity, ArrivalCity, departureTime, price, flightTime, id}) => {
    const navigate = useNavigate()
    const submit = () => {
        navigate(`/payment/${id}`)
    }
    
  return (
    <div className="flight-xfllight">
<div className="flight-frame4">
  
  <div className="flight-frame3">
    <span className="flight-text">
      
      <span>{departureCity}</span>
    </span>
    <span className="flight-text02">
      <span>{departureTime}</span>
    </span>
  </div>
  <div className="flight-frame2">
    <span className="flight-text04">
      <span>{flightTime}</span>
    </span>
    <img
      src="/playground_assets/line13475-fe18.svg"
      alt="Line13475"
      className="flight-line1"
    />
  </div>
  <div className="flight-frame1">
    <span className="flight-text06">
      <span>{ArrivalCity}</span>
    </span>
    <span className="flight-text08">
      <span>11:50</span>
    </span>
  </div>
</div>
<span className="flight-text10">
  <span>{price}</span>
</span>
<button onClick={submit} className='flight-rectangle10'>
 <h1 className="flight-text12">
  <span>Book</span>
</h1>
</button>

 
</div>
  );
};

export default BookContainer;












