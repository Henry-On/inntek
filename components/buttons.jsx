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

export const ButtonLink = ({ text, href, className, icon, ...props }) => {
    return (
        <a
            href={href}
            className={`ibtn ${className}`}
            {...props}
        >
            {text}{icon ? icon : ""}
        </a>
    )
}