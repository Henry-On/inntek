import React from 'react'

function Card_A({title, description, imageName}) {
  return (
    <div className='card card-style-A'>
        <div className="container-top">
          <div className='image-wrapper'>
              <img src={`/images/icons/${imageName}`} alt='' />
          </div>
          <h3 className='card-title'>{title}</h3>
        </div>
        <div className="wrapper-text">
            {description}
        </div>
    </div>
  )
}

export default Card_A