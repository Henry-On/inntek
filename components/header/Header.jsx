import React from 'react'
import Link from "next/link"
import Hamburger from './Hamburger'

const Header = () => {
  return (
    <div className="header content">
        <div className="brand-logo">
          <img src="/images/logo.png" alt="logo"/>
        </div>
        <div className='menu-group'>
          <nav className="wrapper-nav" >
            <Link className="nav-link" href="#">Home</Link>
            <Link className="nav-link" href="#">About Us</Link>
            <Link className="nav-link" href="#">Our Services</Link>
            <Link className="nav-link" href="#">Contact Us</Link>
            <Link className="nav-link header-action" href="#">Our Products</Link>
          </nav>
          <Link className="nav-link header-action d-lg-none" href="/">Our Products</Link>
          <Hamburger/>
        </div>
    </div>
  )
}

export default Header