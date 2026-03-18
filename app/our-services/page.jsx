import Hero from '@/components/Hero'
import HeroContainer from '@/components/HeroContainer'
import Testimonials from '@/components/testimonial/Testimonials'
import Card_B from '@/components/cards/Card_B'
import Card_C from '@/components/cards/Card_C'
import Card_D from '@/components/cards/Card_D'
import Image from "next/image"
import React from 'react'

import fs from "fs/promises";
import path from "path";
import AutomationSlider from './AutomationSlider'


const Services = async () => {

  const filePath = path.join(process.cwd(), "/app/our-services/data.json");
  console.log(filePath)
  const data = JSON.parse(await fs.readFile(filePath, "utf8"));

  const softwareServices = data.softwareServices
  const networkServices = data.networkServices
  const powerPlusCCTVServices = data.powerPlusCCTV

  const openServiceRequestModal = (service_title) => {
    console.log(service_title)
  }
  return (
    <>
      <HeroContainer>
        <Hero
          image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{ width: "auto", height: "100%" }} />}
          breadCrumb="/ what-we-do"
          title="Empowering Growth Through Smart Technology"
          description="At INN RADII, we harness automation, data insights, and seamless connectivity to streamline your operations, elevate decision-making, and tackle today’s toughest challenges"
          button={<a href="" className='ibtn'>Read More</a>}
          alignImage='right'
        />
      </HeroContainer>
      <div className='software-dev'>
        <div className="content">
          <h2 className='section-title pseudo-underline'>Software Development</h2>
          <div className="wrapper-service-cards">
            {
              softwareServices.map((e) => (
                <Card_C
                  key={e.SN}
                  title={e.name}
                  description={e.description}
                  image={e.image}
                  // onClick={()=>console.log("clicked passed from client component")}
                  className={e.SN === 4 ? "layout-control" : ""}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className='network-services'>
        <div className="content">
          <div className='text-center max-width-text'>
            <h2 className='section-title pseudo-underline'>Network Engineering/ ICT System Integration / IT Support</h2>
            We offer wide range of networking services that aim at providing the most efficient and reliable work strategy to improve overall output. Our system integration process focuses on integrating  physical and virtual components of an organisation's systems.
          </div>
          <div className="wrapper-service-cards">
            {
              networkServices.map((e) => (
                <Card_D
                  key={e.SN}
                  title={e.name}
                  description={e.description}
                  image={e.image}
                  className={e.SN === 3 ? "layout-control" : ""}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className="power-cctv">
        <div className="content pb-3">
          <h2 className='text-center section-title'>CCTV and Power Solutions</h2>
        </div>
        <div className="background-container">
          <div className="content">
            <div className="wrapper-cards">
              {
                powerPlusCCTVServices.map((e) => (
                  <Card_B
                    key={e.SN}
                    title={e.name}
                    description={e.description}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="automation-services">
        <div className="content">
          <div className="wrapper-columns">
            <div className="column container-text max-width-text">
              <span className='text-decoration-underline itext-primary small'>We do it better</span>
              <h2 className='section-title'>Simplify Life with Smart Automation</h2>
              <p>Lets transform your home into a smart, efficient, and secure space. From lighting and climate control to security and entertainment, our automation solutions put convenience at your fingertips—so you can focus on what matters most</p>
              <button className='ibtn'>Book Appointment / Enquiries</button>
            </div>
            <div className="column container-carousel">
              <AutomationSlider />
            </div>
          </div>
        </div>
      </div>

      <Testimonials 
      heading="Our Customers are Happy" 
      description="Listen what our customers have to say, don't take our for it, take theirs"
      style={{ backgroundColor: "white" }} 
      />

      <div className='service-bottom'>
        <div className="content">
          <p className='text-black'>INN RADII is the preferred  partner for startups and growing companies ready to embrace the power of modern solutions. We've earned the trust of our partners, and we're ready to earn yours. Let’s build something exceptional together</p>
          <button className='ibtn'>Request Service</button>
        </div>
        <div className="decorations">
          <div className="icon-wrapper">
            <i className="icon fas fa-city"></i>
          </div>
          <div className="icon-wrapper">
            <i className="icon fas fa-broadcast-tower"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services