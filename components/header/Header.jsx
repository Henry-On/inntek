
import React from 'react'
import Link from "next/link"
import Hamburger from './Hamburger'

const Header = () => {

  return (
    <div className="header content" id="header">
      {/* <div > */}
        <Link className="brand-logo" href="/"><img src="/images/logo.png" alt="logo" /></Link>
      {/* </div> */}
      <div className='menu-group'>
        <div className="wrapper-nav" >
          <span className='menu-title d-lg-none'>MENU</span>
          <ul className='pages' data-gsap-animate="stagger-zoom-in" data-gsap-stagger="0.5">
            <li><Link className="nav-link" href="/">Home</Link></li>
            <li><Link className="nav-link" href="/about-us">About Us</Link></li>
            <li><Link className="nav-link" href="/contact-us">Contact Us</Link></li>
            <li><Link className="nav-link desktop-action" href="/our-services">Our Services</Link></li>
          </ul>
          <Link className="nav-link referal-referal" href="/referral-program">Referral Program <i className="icon fa fa-arrow-right" aria-hidden="true"></i></Link>
        </div>
        <Link className="nav-link mobile-action d-lg-none" href="/our-services">Our Services</Link>
        <Hamburger />
      </div>
    </div>
  )
}

export default Header
