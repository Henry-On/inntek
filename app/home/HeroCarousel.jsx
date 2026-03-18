
import React from 'react'
import Link from "next/link"

const HeroCarousel = () => {

  return (
    <div className="hero-carousel">

      <CarouselItem
        className='animate-horizontal'
        imageName='/images/portrait-hero.png'
        title="Robust IT Solutions"
        text="We deliver solutions that are tested, proven and continually evolving. Our commitment to excellence ensures that every service meets the highest standards - today and in the future"
      />
      <CarouselItem
        className='animate-vertical'
        imageName='/images/portrait-hero.png'
        title="Smooth Integrations into Existing Structure"
        text="We deliver solutions that are tested, proven and continually evolving. Our commitment to excellence ensures that every service meets the highest standards - today and in the future"
      />
      <CarouselItem
        className='animate-vertical'
        imageName='/images/portrait-hero.png'
        title="Advanced supports and Benefits"
        text="We deliver solutions that are tested, proven and continually evolving. Our commitment to excellence ensures that every service meets the highest standards - today and in the future"
      />

      <div className="carousel-controls">
        <div className="slide-names">
          <SlideName index={1} name="Innovation"/>
          <SlideName index={2} name="Testimonies" />
          <SlideName index={3} name="Intellectual" />
        </div>
        <span className="slide-button btn-prev-slide left">
          <i className="fa fa-caret-left"></i>
        </span>
        <span className="slide-button btn-next-slide right">
          <i className="fa fa-caret-right"></i>
        </span>
      </div>
    </div>
  )
}

const CarouselItem = ({ imageName, title, text, className, ...props }) => {
  return (
    <div className={`carousel-item ${className}`} {...props}>
      <img className='hero-portrait' src={imageName} alt="logo" />
      <div className='menu-group'>
        <h2 className='title text-white'>{title}</h2>
        <p className='text'>{text}</p>
        {/* <Link className="ibtn call-button" href="/">Our Products</Link> */}
      </div>
    </div>
  )
}

const SlideName = ({ name, className, index, ...props }) => {
  return (
    <div className={`slide-name ${className}`} data-slide={index} {...props}>
      <span className='name'>{name}</span>
      <div className="progress-bar"></div>
    </div>
  )
}

export default HeroCarousel