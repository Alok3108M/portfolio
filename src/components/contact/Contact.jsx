import React from 'react';
import { useState } from 'react';
import "./contact.scss";

export default function Contact() {

const [Message,setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }
  return (
    <div className='contact' id="contact">
      <img src="assets/shake.svg" alt="" />
        <div className="right">
          <h2>Contact</h2>
          <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="Email" />
            <textarea placeholder='Message' />
            <button type="submit">Send</button>
            {Message &&<span>Thanks, i'll reply ASAP :) </span>}
          </form>
        </div>
    </div>
  )
}
