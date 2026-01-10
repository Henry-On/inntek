import React from 'react'
import Image from 'next/image'

export const Hero = ({ breadCrumb, title, description, button, image, alignImage = "left", ...props }) => {
  return (
    <div className="hero" >
        {alignImage == "left" &&
          <>
            <div className="width-placeholder"></div>
            <div className="image-container to-left">{image}</div>
          </>
        }
        <div className='text-content'>
          <span className='breadCrumb'>{breadCrumb}</span>
          <h2 className='font-heading title'>{title}</h2>
          <div className='description'>{description}</div>
          <p>{button}</p>
        </div>
        {alignImage == "right" &&
          <>
            <div className="width-placeholder"></div>
            <div className="image-container to-right">{image}</div>
          </>
        }
    </div>
  )
}
