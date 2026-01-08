"use client"

import {React, useState} from 'react'

const Newsletter = () => {

  const [userEmail, setUserEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }
  
  return (
    <div className="footer-newsletter">
      <div className="content content-inner">
        <h3 className="font-heading text-white">Get updates on new services, offers, and tech insights</h3>
        <form name="form" onSubmit={submitForm}>
          <div className="fa-pseudo wrapper-input">
            <input type="text" name="" id="" placeholder="Email Address" />
          </div>
          <button className="btn-newsletter ibtn bg-sec text-white" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter