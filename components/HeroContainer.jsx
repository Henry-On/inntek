import React from 'react'

const HeroContainer = ({
  backgroundImage = "/images/hero-background.png",
  backgroundOverlayColor,
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
        style={{ backgroundColor: `${backgroundOverlayColor}` }}
      ></div>

      <div className={`content hero-container__content`}>
        {children}
      </div>
    </div>
  )
}

export default HeroContainer
