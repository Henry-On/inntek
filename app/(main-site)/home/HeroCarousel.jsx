
import React from 'react'
import Link from "next/link"
import Image from "next/image"

// carousel images
import displayImage1 from '@/public/images/carousel-it-services.png'
import displayImage2 from '@/public/images/carousel-integration.png'
import displayImage3 from '@/public/images/carousel-customer-service.png'



const HeroCarousel = () => {

  return (
    <div className="hero-carousel">

      <CarouselItem
        titleTag="h1"
        backgroundImage="/images/carousel-1.webp"
        backgroundImageset={["/images/carousel-1.webp", "/images/carousel-1x.webp", "/images/carousel-1xl.webp"]}
        backgroundOverlay="#030f2fc9"
        displayImage={<Image className='hero-portrait' src={displayImage1} alt="IT Services" width={512} height={768} />}
        title="Enterprise-Grade IT Solutions"
        text="We deliver technology that transforms your business. Our tested, proven solutions evolve with your needs, ensuring peak performance and reliability that drives your competitive edge forward."
        className="active"
      />

      <CarouselItem
        backgroundImage="/images/carousel-2.webp"
        backgroundImageset={["/images/carousel-2.webp", "/images/carousel-2x.webp", "/images/carousel-2xl.webp"]}
        backgroundOverlay="#2f0328c9"
        displayImage={<Image className='hero-portrait' src={displayImage2} alt="Integration" width={540} height={601} />}
        title="Seamless Integration Into Your World"
        text="Connect your existing infrastructure effortlessly with solutions that fit your architecture perfectly. We ensure smooth transitions that enhance productivity without disrupting your operations—integration that simply works."
      />

      <CarouselItem
        backgroundImage="/images/carousel-3.webp"
        backgroundImageset={["/images/carousel-3.webp", "/images/carousel-3x.webp", "/images/carousel-3xl.webp"]}
        backgroundOverlay="#032f0ec9"
        displayImage={<Image className='hero-portrait' src={displayImage3} alt="customer service and support" width={663} height={768} />}
        title="Support That Powers Your Business Growth"
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

const CarouselItem = ({ titleTag = "h2", displayImage, title, text, className, backgroundImage, backgroundImageset, backgroundOverlay, ...props }) => {

  const TitleTag = titleTag
  return (
    <div
      className={`carousel-item ${className || ''}`}
      data-background-overlay={backgroundOverlay}
      data-background-image={backgroundImage}
      data-background-imageset={backgroundImageset}
      {...props}
    >

      {displayImage}
      <div className='menu-group'>
        <TitleTag className='title text-white'><span>{title}</span></TitleTag>
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