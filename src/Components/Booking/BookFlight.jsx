import React from "react";
import './BookFlight.css'


const BookFlight = () => {
  return (
    <div className="book__flight">
<div className="flight__card">
   <h1 className="flight__text">Book A Flight</h1>
   <div className="flight__input1">
    <div className="flight__radio1">
    <input type="radio" placeholder="One Way"></input>
    <hi>One Way</hi>
    </div>
    <div className="flight__radio2">
    <input type="radio" ></input>
    <hi>Round trip</hi>
    </div>

    
    
   </div>
   <h1 className="flight__text1">From</h1>
   <div className="flight__destination">
    
        <select className="flight_1">
            <option value="Gombe"> Gombe</option>
            <option value="Gombe"> Gombe</option>
        </select>
    </div>
    <div className="flight__destination2">
    
        <select className="flight_2">
            <option value="Gombe"> Gombe</option>
            <option value="Gombe"> Gombe</option>
        </select>
    </div>
</div>
    </div>
  );
};

export default BookFlight;
