import { Hero } from '@/components/Hero'
import Image from "next/image"
import React from 'react'

const Services = () => {
    return (
            <>
                <Hero
                image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{width:"auto", height:"100%"}} />}
                    breadCrumb="/ what-we-do"
                    title="Empowering Growth Through Smart Technology"
                    description="At INN RADII, we harness automation, data insights, and seamless connectivity to streamline your operations, elevate decision-making, and tackle today’s toughest challenges"
                    button={<a href="" className='ibtn'>Read More</a>}
                    alignImage='right'
                />
                <div>Services Page Section</div>
            </>
        )
}

export default Services