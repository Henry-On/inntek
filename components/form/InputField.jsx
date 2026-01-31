"use client"
import React from 'react'
import InputMessage from './InputMessage'

function InputField({
  type = "text",
  className,
  error,
  label,
  ...props 
}) {
  return (
    <div className='wrapper-input'>
      {label && <span className='input-label'>{label}</span>}
      <input className={`input-field ${className}`} type={type} {...props} />
      <InputMessage message={error} />
    </div>
  )
}

export default InputField