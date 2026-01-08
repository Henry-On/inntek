import React from 'react'
import Image from 'next/image'

const HeroContainer = ({ backgroundImage = "/images/hero-background.png", className, style, children, ...props }) => {
  return (
    <div
      className={`hero-container ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})`, ...style }}
      {...props}
    >
      <div className={`content hero-container__content`}>
        {children}
      </div>
    </div>
  )
}

export default HeroContainer
