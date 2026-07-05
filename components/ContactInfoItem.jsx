import React from 'react'

const ContactInfoItem = ({ icon, label, value, className }) => {
    return (
        <div className={`contact-info-item ${className}`}>
            <i className={`icon ${icon}`} />
            <div className="right">
                <span className="label">{label}</span>
                <p style={{ color: "#000" }}>{value}</p>
            </div>
        </div>
    )
}

export default ContactInfoItem