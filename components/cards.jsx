import React from "react"
import FontAwesomeIcon from "./FontAwesomeIcon"

export const Card_A = ({ title, description, icon, ...props }) => {

    /**
     * @Usage This card uses only Fontawesome icon;
     * Checks if Icon is a react element; if so, use it directly, otherwise create a FontAwesomeIcon component
     * */

    return (
        <div className='card card-a' {...props}>
            <div className="wrapper-title">
                <div className="icon-area">{React.isValidElement(icon) ? icon : <FontAwesomeIcon className={icon} />}</div>
                <h3 className='title'>{title}</h3>
            </div>
            <div className="wrapper-text">
                {description}
            </div>
        </div>
    )
}

export const Card_B = ({ title, description, ...props }) => {
    return (
        <div className='card card-b' {...props}>
            <h2 className="title">{title}</h2>
            {description}
        </div>
    )
}

export const Card_C = ({ title, description, imageName, className, ...props }) => {
    return (
        <div className={`card card-c ${className || ""}`} {...props}>
            <div className="image-wrapper">
                <img src={`/images/icons/${imageName}`} alt='' />
            </div>
            <h2 className="title">{title}</h2>
            {description}
        </div>
    )
}

export const Card_D = ({ title, description, image, onPress, className, ...props }) => {
    return (
        <div
            className={`card card-d ${className}`}
            {...props}
        >
            <img src={image} alt='' />
            <div className="card-content">
                <h2 className='title'>{title}</h2>
                {description}
            </div>
        </div>
    )
}

export const Card_E = ({ title, description, image, onPress, className="", ...props }) => {
    return (
        <div
            className={`card card-e ${className}`}
            {...props}
        >
            <div className="image-container">
                <img src={image} alt='' />
                <h2 className='title'>{title}</h2>
            </div>
            <div className="card-text">
                <p>{description}</p>
                {/* <CardButtonClient onPress={onPress} /> */}
            </div>
        </div>
    )
}
