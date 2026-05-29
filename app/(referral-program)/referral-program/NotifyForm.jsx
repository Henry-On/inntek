"use client"

import { useState } from 'react'

const NotifyForm = ({ styles }) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
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
        <button type="submit">Notify Me</button>
      </div>
      {submitted && (
        <p className={styles.successMessage} role="status">
          Thanks. We will let you know when the referral program is ready.
        </p>
      )}
    </form>
  )
}

export default NotifyForm
