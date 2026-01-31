import React from 'react'
import Image from 'next/image'
import bgImg1 from "@/public/images/hero-background-2.png"
import bgImg2 from "@/public/images/persons-three.png"


const FixedBackgroundToColumn = ({ backgroundImage, columnImage, children, style, className }) => {

    return (
        <div
            className={`background-to-column ${className ? className : ""}`}
            style={{ backgroundImage: `url(${backgroundImage})`, ...style }}
        >
            <div className="wrapper-columns">
                <div className="column-left">
                    {columnImage}
                </div>
                <div className='content-text'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FixedBackgroundToColumn