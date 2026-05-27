"use client"

import { React, useState } from 'react'

const Newsletter = () => {

  const [userEmail, setUserEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitted")
  }

  return (
    <div className="footer-newsletter">
      <h3 className="section-title text-accent">Get updates on new services, offers, and tech insights</h3>
      <form name="form" onSubmit={submitForm}>
        <div className="fa-pseudo wrapper-input">
          <input type="text" name="" id="" placeholder="Your Email Address" />
        </div>
        <button className="btn-newsletter ibtn bg-sec text-white" type="submit">SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default Newsletter