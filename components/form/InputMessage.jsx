"use client"
import React from 'react'

function InputMessage({ type="warning", message, ...props }) {
    return (
        <span className={`input-message ${type}`} {...props} >
            {message}
        </span>
    )
}

export default InputMessage