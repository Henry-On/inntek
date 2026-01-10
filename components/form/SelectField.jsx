"use client"
import React, { useState, useEffect } from 'react'
import InputMessage from './InputMessage'

function SelectField({
    error,
    label,
    data,
    className,
    def,
    ...props
}) {

    return (
        <div className='wrapper-input'>
            {label && <span className='input-label'>{label}</span>}
            <select className={`input-field ${className}`} {...props}>
                <option value={def?.value ?? ""}>{def?.name ?? "Options..."}</option>
                {
                    data?.map((e) => (
                        <option key={e.value} value={e.value}>{e.name}</option>
                    ))
                }
            </select>
            <InputMessage message={error} />
        </div>
    )
}

export default SelectField