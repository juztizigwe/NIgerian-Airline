import React, {useState} from 'react'
import './Form.css'
function Form() {
   
   const [name, setName] = useState("")
   const [email, setEmail ] = useState("")
   const [phone, setPhone] = useState("") 
   const [message, setMessage] = useState("")

  
   const handleSubmit =(e) =>{
       e.preventDefault();
       console.log(name, email, phone, message)
   }


  return (
   <form onSubmit={handleSubmit}>
    <h1>Contact <span>Here</span></h1>
    <input type="text" name="name" id="" placeholder="Enter name"  onChange={(e) => setName(e.target.value)}></input>
    <input type="email" name="email" id="" placeholder='Enter Email'  onChange={(e) => setEmail(e.target.value)}></input>
    <input type="phone" name="phone" id="" placeholder='Enter phone number'  onChange={(e) => setPhone(e.target.value)}></input>
    <textarea name="message" id="" cols="30" rows="18" placeholder="Enter message" onChange={(e) => setMessage(e.target.value)}></textarea>
    <button type="submit" >Send  </button>
    <p>{} </p>
   </form>
  )
}

export default Form