import React from 'react'
import CardButtonClient from '../CardButtonClient'

function Card_C({ title, description, image, onPress, className, ...props }) {
  // extract image name for alt
  return (
    <div
      className={`card card-type-3 ${className}`}
      {...props}
    >
      <div className="image-container">
        <img src={image} alt='' />
        <h2 className='card-title'>{title}</h2>
      </div>
      <div className="card-text">
        <p>{description}</p>
        <CardButtonClient onPress={onPress} />
      </div>
    </div>
  )
}

export default Card_C