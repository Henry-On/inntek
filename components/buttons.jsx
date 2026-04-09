import React from "react"

const ButtonSubmit = ({ text, link, className, ...props }) => {
    return (
        <button
            className={`ibtn ${className}`}
            {...props}
        >
            {text}
        </button>
    )
}

export const ButtonLink = ({ text, href="#", className, icon, ...props }) => {
    const iconWithAria = React.isValidElement(icon) ? React.cloneElement(icon, { 'aria-hidden': 'true' }) : icon;
    return (
        <a
            href={href}
            className={`ibtn ${className ? className : ''}`}
            {...props}
        >
            {text}{icon ? iconWithAria : ""}
        </a>
    )
}