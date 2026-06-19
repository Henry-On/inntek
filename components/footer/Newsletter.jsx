"use client"

import { React, useState } from 'react'
import { submitSiteForm } from '@/lib/submitSiteForm'

const Newsletter = () => {

  const [status, setStatus] = useState({ type: "", message: "" })
  const [submitting, setSubmitting] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    setStatus({ type: "", message: "" })

    const formData = new FormData(e.currentTarget)

    try {
      const data = await submitSiteForm({
        formType: "newsletter",
        email: formData.get("email"),
        subject: "Newsletter subscription",
      })

      setStatus({ type: "success", message: data.message })
      e.currentTarget.reset()
    } catch (error) {
      setStatus({ type: "warning", message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="footer-newsletter">
      <h3 className="section-title text-accent">Get updates on new services, offers, and tech insights</h3>
      <form name="form" onSubmit={submitForm}>
        <div className="fa-pseudo wrapper-input">
          <input type="email" name="email" placeholder="Your Email Address" required />
        </div>
        <button className="btn-newsletter ibtn bg-sec text-white" type="submit" disabled={submitting}>
          {submitting ? "SENDING..." : "SUBSCRIBE"}
        </button>
        {status.message && (
          <span className={`input-message ${status.type}`} role="status">
            {status.message}
          </span>
        )}
      </form>
    </div>
  )
}

export default Newsletter
