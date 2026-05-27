import React from 'react'
import Image from 'next/image'

const Hero = ({ breadCrumb, title, description, button, image, alignImage = "left", ...props }) => {
  return (
    <div className={`hero image-to-${alignImage}`} >
      <div className="width-placeholder"></div>
      <div className={`image-container`}>{image}</div>
      <div className='text-content' data-gsap-animate="stagger-fade-up" data-gsap-distance="70">
        <span className='breadCrumb'>{breadCrumb}</span>
        <h2 className='font-heading title'>{title}</h2>
        <div className='description'>{description}</div>
        <p>{button}</p>
      </div>
    </div>
  )
}

export default Hero