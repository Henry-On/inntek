
const SectionIcon = ({ icon, backgroundColor, className, style, ...props }) => {
    return (
        <i
            aria-hidden="true"
            className={`section-icon ${icon} ${className}`}
            style={{ backgroundColor: backgroundColor, ...style }}
            {...props}
        >
        </i>
    )
}

export default SectionIcon