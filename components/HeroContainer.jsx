import React from 'react'
// import defaultBackground from '@/public/images/hero-background.webp'

const HeroContainer = ({
  backgroundImage = "/images/hero-background.webp",
  backgroundOverlayColor="#000000c9",
  className,
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={`hero-container ${className ? className : "" }`}
      style={{ backgroundImage: `url(${backgroundImage})`, ...style }}
      {...props}
    >
      <div
        className="background-overlay"
        aria-hidden="true"
        style={{ backgroundColor: `${backgroundOverlayColor}`, transition: "background 1s ease-in-out" }}
      ></div>

      <div className={`content hero-container__content`}>
        {children}
      </div>
    </div>
  )
}

export default HeroContainer
