import React from 'react'

function Card_A({title, description, imageName}) {
  return (
    <div className='card card-style-A'>
        <div className='image-wrapper'>
            <img src={`/images/icons/${imageName}`} alt='' />
        </div>
        <div className="wrapper-text">
            <h3 className='card-title'>{title}</h3>
            {description}
        </div>
    </div>
  )
}

export default Card_A