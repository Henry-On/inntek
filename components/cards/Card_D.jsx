import React from 'react'
import CardButtonClient from '../CardButtonClient'

function Card_D({ title, description, image, onPress, className, ...props }) {
    // extract image name for alt
    return (
        <div
            className={`card card-type-4 ${className}`}
            {...props}
        >
            <img src={image} alt='' />
            <div className="card-content">
                <h2 className='card-title'>{title}</h2>
                {description}
            </div>
        </div>
    )
}

export default Card_D