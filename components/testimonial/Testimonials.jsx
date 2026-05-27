import React from 'react'
import SectionIcon from '../SectionIcon'
import TestimonialCarousel from "./TestimonialCarousel"

const Testimonials = ({ heading, description, ...props }) => {
  const defaultText = "Our customers, Our gems. Some of our clients has some nice things to say about us"
  const subText = description || defaultText
  return (
    <div className='testimonials' {...props}>
      <div className="content">
        <div className='container-top' data-gsap-animate="stagger-fade-up" >
          <SectionIcon
            icon="far fa-smile"
            // backgroundColor="#2c790035"
            style={{color:"#3e9e06"}}
          />
          <h3 className='section-title'>{heading || "What People think of Us"}</h3>
          <p>{subText}</p>
        </div>
        <div className="hide-x-scrollbar" data-gsap-animate="zoom-in">
          <TestimonialCarousel />
        </div>
        <div className="carousel-indicators"></div>
      </div>
    </div>
  )
}

export default Testimonials
