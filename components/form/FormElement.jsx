"use client"
import React, { useState } from 'react'
import InputMessage from './InputMessage'
import { submitSiteForm } from '@/lib/submitSiteForm'

function FormElement({
  processing,
  buttonText="Submit",
  buttonWrapperClass,
  children,
  formType = "contact",
  ...props 
}) {
  const [status, setStatus] = useState({ type: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: "", message: "" })

    const formData = new FormData(event.currentTarget)

    try {
      
      const data = await submitSiteForm({
        formType,
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      })

      setStatus({ type: "success", message: data.message })
      event.currentTarget.reset()
    } catch (error) {
      setStatus({ type: "warning", message: error.message })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form action="" {...props} onSubmit={handleSubmit}>
      {children}
      {buttonWrapperClass ? (
        <div className={buttonWrapperClass}>
          <button className='ibtn' type="submit" disabled={processing || isSubmitting}>
            {isSubmitting ? "Sending..." : buttonText}
          </button>
        </div>
      ) : (
        <button className='ibtn' type="submit" disabled={processing || isSubmitting}>
          {isSubmitting ? "Sending..." : buttonText}
        </button>
      )}
      <InputMessage type={status.type} message={status.message} role="status" />
    </form>
  )
}

export default FormElement
