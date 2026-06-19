"use client"

import { useState } from 'react'
import { submitSiteForm } from '@/lib/submitSiteForm'

const NotifyForm = ({ styles }) => {
  const [status, setStatus] = useState({ type: "", message: "" })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: "", message: "" })

    const formData = new FormData(event.currentTarget)

    try {
      const data = await submitSiteForm({
        formType: "referralNotify",
        email: formData.get("email"),
        subject: "Referral program notification request",
      })

      setStatus({ type: "success", message: data.message })
      event.currentTarget.reset()
    } catch (error) {
      setStatus({ type: "warning", message: error.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className={styles.notifyForm} onSubmit={handleSubmit}>
      <label className={styles.inputLabel} htmlFor="referral-email">
        Email address
      </label>
      <div className={styles.formRow}>
        <input
          id="referral-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? "Sending..." : "Notify Me"}
        </button>
      </div>
      {status.message && (
        <p className={styles.successMessage} role="status">
          {status.message}
        </p>
      )}
    </form>
  )
}

export default NotifyForm
