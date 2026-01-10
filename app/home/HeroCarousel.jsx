import React from 'react'
import Link from "next/link"

const HeroCarousel = ({ title, text, }) => {
  return (
    <div className="hero-carousel">
      <img className='hero-portrait' src="/images/portrait-hero.png" alt="logo" />
      <div className='menu-group'>
        <h2 className='section-title text-white'>{title}</h2>
        <p>{text}</p>
        <Link className="ibtn" href="/">Our Products</Link>
      </div>

      <div className="carousel-controls">
        <div className="slide-names">
          <SlideName name="Innovation" />
          <SlideName name="Testimonies" state='current'/>
          <SlideName name="Intellectual" />
        </div>
        <span className="slide-button left">
          <i className="fa fa-caret-left"></i>
        </span>
        <span className="slide-button right">
          <i className="fa fa-caret-right"></i>
        </span>
      </div>
    </div>
  )
}

const SlideName = ({ name, state }) => {
  return (
    <div className={`slide-name ${state}`}>
      <span className='name'>{name}</span>
      <div className="progress-bar"></div>
    </div>
  )
}

export default HeroCarousel