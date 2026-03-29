"use client"
import React from 'react'
import InputMessage from './InputMessage'

function FormElement({
  processing,
  buttonText="Submit",
  children,
  ...props 
}) {
  return (
    <form action="" {...props} >
      {children}
      <button className='ibtn'>{buttonText}</button>
    </form>
  )
}

export default FormElement