"use client"
import React from 'react'

import { useState } from 'react'

function Hamburger() {

    let menuWrapper = null;
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev=>!prev)
        menuWrapper = document.querySelector(".wrapper-nav").classList.toggle("visible")
    }

    return (
        <div aria-hidden="true" className={`menu-hamburger ${menuOpen ? "clicked" : ""} d-lg-none`} onClick={toggleMenu} >
            <div className="line line-one"></div>
            <div className="line line-two"></div>
            <div className="line line-three"></div>
        </div>
    )
}

export default Hamburger