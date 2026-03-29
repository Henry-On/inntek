"use client"
import React from 'react'

const ContainerContactForm = ({ open, setOpen, headerTitle, children }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop fade show" onClick={() => setOpen(false)}></div>
      <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">{headerTitle || "Contact Form"}</h3>
              <button type="button" className="btn-close" onClick={() => setOpen(false)}></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerContactForm