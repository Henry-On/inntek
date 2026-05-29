import React from 'react'

const ContactInfoItem = ({ icon, label, value }) => {
    return (
        <div className="card contact-info-card">
            <i className={`icon ${icon}`} />
            <div className="right">
                <span className="label">{label}</span>
                <p style={{ color: "#000" }}>{value}</p>
            </div>
        </div>
    )
}

export default ContactInfoItem