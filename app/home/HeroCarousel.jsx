
import React from 'react'
import Link from "next/link"

const HeroCarousel = () => {

  return (
    <div className="hero-carousel">

      
      <CarouselItem
        backgroundImage="/images/cctv cam.jpeg"
        backgroundOverlay="#182f03c9"
        imageName='/images/portrait-hero.png'
        title="Enterprise-Grade IT Solutions"
        text="We deliver technology that transforms your business. Our tested, proven solutions evolve with your needs, ensuring peak performance and reliability that drives your competitive edge forward."
        className="active"
      />
      
      <CarouselItem
        backgroundImage="/images/networking-2.png"
        backgroundOverlay="#182f03c9"
        imageName='/images/carousel-image-1.png'
        title="Seamless Integration Into Your World"
        text="Connect your existing infrastructure effortlessly with solutions that fit your architecture perfectly. We ensure smooth transitions that enhance productivity without disrupting your operations—integration that simply works."
      />
      
      <CarouselItem
        backgroundImage="/images/people-users.png"
        backgroundOverlay="#2f0f03c9"
        imageName='/images/portrait-2.png'
        title="Support That Powers Your Growth"
        text="Expert support at every stage of your journey. From deployment to optimization, we're with you ensuring consistent performance, rapid problem resolution, and continuous improvements that scale with your ambitions."
      />

      <div className="carousel-controls">
        <div className="slide-names">
          <SlideName index={1} name="IT Solutions" />
          <SlideName index={2} name="Integration" />
          <SlideName index={3} name="Support" />
        </div>
        <span className="slide-button btn-prev-slide left">
          <i className="fa fa-caret-left" aria-hidden="true"></i>
        </span>
        <span className="slide-button btn-next-slide right">
          <i className="fa fa-caret-right" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

const CarouselItem = ({ imageName, title, text, className, backgroundImage, backgroundOverlay, ...props }) => {
  return (
    <div
      className={`carousel-item ${className}`}
      data-background-overlay={backgroundOverlay}
      data-background-image={backgroundImage}
      {...props}
    >
      <img className='hero-portrait' src={imageName} alt="logo" title=
      'some title'/>
      <div className='menu-group'>
        <h2 className='title text-white'>{title}</h2>
        <p className='text'>{text}</p>
      </div>
    </div>
  )
}

const SlideName = ({ name, className, index, ...props }) => {
  return (
    <div className={`slide-name ${className}`} data-slide={index} {...props}>
      <span className='name'>{name}</span>
      <div className="progress-bar" aria-hidden="true"></div>
    </div>
  )
}

export default HeroCarousel