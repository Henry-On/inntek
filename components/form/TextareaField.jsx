"use client"
import React from 'react'
import InputMessage from './InputMessage'

function TextareaField({
  error, label,
  ...props }) {
  return (
    <div>
      {label && <span className='input-label'>{label}</span>}
      <textarea className='input-field' {...props} ></textarea>
      <InputMessage message={error}/>
    </div>
  )
}

export default TextareaField