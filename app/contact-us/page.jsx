import Hero from '@/components/Hero'
import Image from 'next/image'
import HeroContainer from '@/components/HeroContainer'
import React from 'react'

const Contact = () => {
    return (
        <div className='contact-us'>
            <HeroContainer>
                <Hero
                    image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{ width: "auto", height: "100%" }} />}
                    breadCrumb="/ contact-us"
                    title="Need Help? Let's talk"
                    description="Our Customers and partners are the heart of everything we stand for. Whether you're seeking support, have a question, or just want to share your thought. We are available to help, any day, any time"
                    // button={<a href="" className='ibtn'>Read More</a>}
                    alignImage='right'
                />
            </HeroContainer>
        </div>
    )
}

export default Contact