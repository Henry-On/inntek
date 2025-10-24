import React from 'react'
import Link from "next/link"
import Hamburger from './Hamburger'

const HeroCarousel = ({title, text, }) => {
  return (
    <div className="carousel">
        <img src="/images/logo.png" alt="logo"/>
        <div className='menu-group'>
            <h2>{title}</h2>
            <p>{text}</p>
          <Link className="nav-link header-action d-lg-none" href="/">Our Products</Link>
        </div>
    </div>
  )
}

export default HeroCarousel