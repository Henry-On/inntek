import Hero from '@/components/Hero'
import Image from 'next/image'
import { Card_B } from '@/components/cards'
import SectionIcon from '@/components/SectionIcon'
import React from 'react'
import { ButtonLink } from '@/components/buttons'
import { SectionTitle } from '../home/page'
import HeroContainer from '@/components/HeroContainer'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'

export const metadata = {
  title: 'InnTek - About Us'
}

const About = () => {

  const QualityItem = ({ title, description, iconClassName }) => {
    return (
      <div className='quality-item'>
        <div className="wrapper-title">
          <FontAwesomeIcon className={iconClassName} />
          <h3 className='title'>{title}</h3>
        </div>
        <div style={{ paddingLeft: "48px" }}>{description}</div>
      </div>
    )
  }

  const QualityItemList = () => {
    return (
      <div className="quality-item-list" data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2">
        <QualityItem
          iconClassName="fas fa-level-up-alt"
          title="Always Improving"
          description="We keep learning, testing, and refining so every solution gets stronger over time"
        />
        <QualityItem
          iconClassName="fas fa-users"
          title="Customer Focused"
          description="We listen closely, adapt to your needs, and build with your goals in mind"
        />
        <QualityItem
          iconClassName="fas fa-smile"
          title="Open and Accountable"
          description="We share progress clearly and stand behind our work at every stage"
        />
        <QualityItem
          iconClassName="fas fa-hands-helping"
          title="Collaborative by Design"
          description="Great results come from teamwork, shared ideas, and careful craftsmanship"
        />
        <QualityItem
          iconClassName="fas fa-level-up-alt"
          title="Flexible and Adaptive"
          description="We move quickly with changing needs and keep the project on the right path"
        />
        <QualityItem
          iconClassName="fas fa-user-secret"
          title="Privacy First"
          description="We treat your data with care, security, and respect in every engagement"
        />
      </div>
    )
  }


  return (
    <div className='about'>
      <HeroContainer>
        <Hero
          image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{ width: "auto", height: "100%" }} />}
          breadCrumb="/ about-us"
          title="Empowering Growth Through Smart Technology"
          description="At INN RADII, we harness automation, data insights, and seamless connectivity to streamline your operations, elevate decision-making, and tackle today’s toughest challenges"
          button={<ButtonLink
            href="#about__introduction"
            text="Read More"
            icon={<FontAwesomeIcon className="fa fa-caret-down" style={{ fontSize: "24px" }} />}
          />}
        />
      </HeroContainer>
      <div className='about__introduction' id='about__introduction'>
        <div className='content introduction_content' data-gsap-animate="stagger-fade-up">
          <h3 className='itext-primary fw-lighter small' data-gsap-animation="fade-down" style={{ backgroundColor: "white", borderRadius: "32px", padding: "8px 16px", margin: "auto", display: "inlineBlock" }}>Indigeneous I.T Company</h3>
          <h1 className='font-heading fw-bold title' data-gsap-animation="fade-down">Innovation Radii</h1>
          <p data-gsap-animation="fade-down">INN RADII is a home-grown IT leader committed to empowering organizations in today’s digital age. Well known for delivering end-to-end solutions that drive efficiency, innovation, and sustainable growth across multiple industries.</p>
          <img src="/images/illustration-building.png" alt="" width={100} />
        </div>
      </div>
      <div className="about__cores ">
        <div className="content text-center">
          <div className='d-none flex-column gap-1 align-items-center max-width-text'>
            <SectionIcon icon="fa fa-gem" />
            <h3 className='section-title'>Operation Principles</h3>
            <p>We have clearly defined principles and standards that guide every solution we deliver. This is how we ensure consistency, and quality outcomes every time.</p>
          </div>
          <div className="core-columns" >
            <CorePrinciple
              title="Our Values"
              description="We value core principles of operation, building an agile, tech forward environment that enables organizations to thrive,  eliminating inefficiencies and  redundant procedures"
              imageName="core-values.svg"
              data-gsap-animate="stagger-fade-up"
            />
            <CorePrinciple
              title="Our Mission"
              description="To deliver transformative, user-focused tech products and services that are reliable, user-focused, enhance everyday life, and drive sustainable digital growth" imageName="core-mission.svg"
              className={"active"}
              data-gsap-animate="stagger-fade-up"
            />
            <CorePrinciple
              title="Commitment"
              description="We’re fueled by innovation, committed to continuous improvement, creative thinking, and pushing boundaries to build impactful solutions and exceed expectations"
              imageName="core-diamond.svg"
              data-gsap-animate="stagger-fade-up"
            />
          </div>
        </div>
      </div>
      <div className="about__stories">
        <div className="content">
          <div className='content-wrapper'>
            <div className="section" data-gsap-animate="stagger-fade-up">
              <h3 className='section__title'>How We Deliver</h3>
              <div className="section__description">We focus on practical, measurable results — delivering reliable solutions on time and with clear communication at every step:</div>
              <ul className='principles-list'>
                <li className="li">Clear Scope / Milestones</li>
                <li className="li">Dedicated teams</li>
                <li className="li">Hands-on testing</li>
                <li className="li">Quality Checks</li>
                <li className="li">247 Support</li>
              </ul>
            </div>
            <div className="section history">
              <div className="row-stack">
                <div className="main" data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2">
                  <h3 className='section__title'>Built Small, Built to Last: Our Story of Growth</h3>
                  <div className="section__description" >From a three-person web‑design shop, we've grown into a multidisciplinary tech firm. Over time we added mobile apps, networking, IoT, and renewable‑energy services—always focused on durable, high‑impact results. What started as a bold, small team is now a trusted partner across industries. We've come far, but our best work is still ahead</div>
                </div>
                <div className="image-wrapper" data-gsap-animate="zoom-in">
                  <img src='/images/networking-2.png' alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__why-us" >
        <div className="wrapper-columns">
          <div className="column-left" data-gsap-animate="stagger-zoom-in">
            <div className="container-image">
              <img className='hero-image' src="/images/people-users.png" alt='hero-man-holding-laptop' />
            </div>
            <div className="container-image xl">
              <img className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' />
            </div>
          </div>
          <div className='content-text'>
            <div className="text-content" >
              <div className="mb-4 mt-lg-0" >
                <p className='section-info' data-gsap-animate="fade-down" data-gsap-distance="sm">Our Team / Services</p>
                <SectionTitle title="How We Are Different" Tag='h3' />
              </div>
              <QualityItemList />
            </div>
          </div>
        </div>
      </div>
      <div className="about__our-services">
        <div className="content">
          <div className="heading-caption">
            <SectionTitle title="Scout Our Services" />
            <a href="./our-services" style={{ fontWeight: "lighter" }}>All <i className='fa fa-caret-right'></i></a>
          </div>
          <div className='service-cards' data-gsap-animate="stagger-zoom-in">
            <Card_B title="Web Development" description="We build visually appealing, high-performing websites using modern technologies, optimized for speed, usability, and SEO to help your brand stand out online." />
            <Card_B title="Mobile Development" description="From iOS to Android, our native and cross-platform apps deliver intuitive UX, seamless performance, and reliable scalability to support your users and business growth." />
            <Card_B title="Computer Networking" description="We provide comprehensive networking solutions, including installation and maintenance of secure LAN/WAN infrastructures, ensuring secure, reliable connections for smooth business operations." />
            <Card_B title="Managed I.T Workplace" description="We equip workplaces with fast, secure IT infrastructure. We ensure enabling seamless communication, file sharing, and collaboration in a cost-effective environment. You are also secured with RFID, PINs, facial recognition, or fingerprints access controls" />
            <Card_B title="Solar Power Installation" description="Harness renewable energy, a wasteless and everlasting energy source.  We handle panel installation to smart energy distribution, tailored to meet your power needs reliably taking into account all necessary industry specification" />
            <Card_B title="CCTV Installations" description="Explore our Closed-circuit television (CCTV)cameras that go beyond video surveillance and provide high-quality cost-effective results. We tailor the technology to client’s preference - continuously or only as required to monitor a particular event." />
          </div>
          <ButtonLink
          className='book-appointment'
          href="./contact-us" text="Book Appointment"
          icon={<FontAwesomeIcon className='fas fa-rocket' />}
          data-gsap-animate="fade-up" data-gsap-distance="sm"
        />
        </div>
      </div>
    </div>

  )
}

const CorePrinciple = ({ title, description, imageName, className, ...props }) => {
  return (
    <div className={`column square-item ${className ? className : ''}`} {...props}>
      <h3 className='column__title'>{title}</h3>
      <span>{description}</span>
      <div className="wrapper-image">
        <img className='column__image' src={`/images/icons/${imageName}`} alt="" />
      </div>
    </div>
  )
}

export default About