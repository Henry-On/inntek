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

export const ButtonLink = ({ 
    text, 
    href="#", 
    className="", 
    icon, 
    iconPosition="right", 
    ...props
}) => {
    const iconWithAria = React.isValidElement(icon) ? React.cloneElement(icon, { 'aria-hidden': 'true' }) : icon;
    return (
        <a
            href={href}
            className={`ibtn ${className}`}
            {...props}
        >
            {iconPosition === "left" && icon ? iconWithAria : ""}{text}{iconPosition === "right" && icon ? iconWithAria : ""}
        </a>
    )
}