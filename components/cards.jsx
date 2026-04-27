export const ServiceCardA = ({ title, description, ...props }) => {
    return (
        <div className='card card-A' {...props}>
            <h2 className="title">{title}</h2>
            {description}
        </div>
    )
}

export const ServiceCardB = ({ title, description, imageName, ...props }) => {
    return (
        <div className={`card card-B ${props.className || ""}`} {...props}>
            <div className="image-wrapper">
                <img src={`/images/icons/${imageName}`} alt='' />
            </div>
            <h2 className="title">{title}</h2>
            {description}
        </div>
    )
}