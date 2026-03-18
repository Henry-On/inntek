"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { usePathname } from "next/navigation"

function Hamburger() {

    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev)
        document.querySelector(".wrapper-nav").classList.toggle("visible")
    }

    useEffect(() => {
        setMenuOpen(false)
        const menu = document.querySelector(".wrapper-nav")
        if (menu) menu.classList.remove("visible")
    }, [pathname])

    return (
        <div aria-hidden="true" className={`menu-hamburger ${menuOpen ? "clicked" : ""} d-lg-none`} onClick={toggleMenu} >
            <div className="line line-one"></div>
            <div className="line line-two"></div>
            <div className="line line-three"></div>
        </div>
    )
}

export default Hamburger