import Hero from '@/components/Hero'
import Image from 'next/image'
import { Card_B } from '@/components/cards'
import SectionIcon from '@/components/SectionIcon'
import React from 'react'
import { ButtonLink, Button } from '@/components/buttons'
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
          button={<Button
            data-scroll-to="about__introduction"
            text="Read More"
            icon={<FontAwesomeIcon className="fa fa-caret-down" style={{ fontSize: "24px" }} />}
          />}
        />
      </HeroContainer>
      <div className='about__introduction' id='about__introduction'>
        <div className='content' >
          <div className='top-content' data-gsap-animate="stagger-fade-up">
            <h3 className='itext-primary fw-lighter small' style={{ borderRadius: "32px", margin: "auto", display: "inlineBlock" }}>Indigeneous I.T Company</h3>
            <h1 className='font-heading fw-bold title'>Innovation Radii</h1>
            <p data-gsap-animation="fade-down">INN RADII is a home-grown IT leader committed to empowering organizations in today’s digital age. Well known for delivering end-to-end solutions that drive efficiency, innovation, and sustainable growth across multiple industries.</p>
          </div>
          <div className="about__cores">
            <div className="core-columns" >
              <CorePrinciple
                title="Our Values"
                description="Core principles of operation, building an agile, tech forward environment that enables organizations to thrive."
                imageName="core-values.svg"
                iconClassName="fa fa-eye"
                data-gsap-animate="stagger-fade-up"
                style={{ backgroundColor: "#2b8b63" }}
              />
              <CorePrinciple
                title="Our Mission"
                description="To deliver transformative, user-focused tech products and services that are reliable, user-focused, enhances everyday life, and drive sustainable digital growth, eliminating inefficiencies and  redundances" imageName="core-mission.svg"
                className={"active"}
                style={{ backgroundColor: "#8b2b2b" }}
                iconClassName="fas fa-bullseye"
                data-gsap-animate="stagger-fade-up"
              />
              <CorePrinciple
                title="Commitment"
                description="We have clearly defined principles and standards that guide every solution we deliver. We are fueled by innovation, committed to continuous improvement, creative thinking, and pushing boundaries to build impactful solutions. We do not aim to meet exoectations, we put the work to exceed expectations"
                imageName="core-diamond.svg"
                style={{ backgroundColor: "#708b2b" }}
                data-gsap-animate="stagger-fade-up"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="about__stories">
        <div className="content">
          <div className='content-wrapper'>
            <div className="top-section" data-gsap-animate="stagger-fade-up">
              <h3 className='caption'>How We Deliver</h3>
              <div className="title">We focus on practical, measurable results — delivering reliable solutions on time and with clear communication at every step:</div>
              <ul className='principles-list'>
                <li className="li">Clear Scope / Milestones</li>
                <li className="li">Dedicated teams</li>
                <li className="li">Hands-on testing</li>
                <li className="li">Quality Checks</li>
                <li className="li">247 Support</li>
              </ul>
              <FontAwesomeIcon className="fa fa-envira" />
            </div>
            <div className="history">
              <div className="row-stack">
                <div className="main" data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.2">
                  <h3 className='title'>Built Small, Built to Last: Our Story of Growth</h3>
                  <div className="section__description" >From a three-person web‑design shop, we've grown into a multidisciplinary tech firm. Over time we added mobile apps, networking, IoT, and renewable‑energy services—always focused on durable, high‑impact results. What started as a bold, small team is now a trusted partner across industries. We've come far, but our best work is still ahead</div>
                </div>
                <div className="image-wrapper">
                  <Image src="/images/about-us-story-placeholder.webp" alt="innovation history representation" width="613" height="426" objectFit='cover'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about__why-us" data-gsap-trigger="pinned-content">
        <div className="wrapper-columns">
          <div id="pinned-content" className="column-left" data-gsap-animate="stagger-zoom-in">
            <div className="container-image">
              <Image src="/images/people-users.webp" alt='group-of-people-looking-at-laptop' width={768} height={834} />
            </div>
            <div className="container-image xl">
              <Image src="/images/portrait-hero.png" alt='tech-guy' width={665} height={949} />
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
            <ButtonLink
              className='all-services-link'
              text="All Services"
              href="./our-services"
              icon={<FontAwesomeIcon className="fa fa-caret-right" />}
            />
          </div>
          <div className='service-cards' data-gsap-animate="stagger-zoom-in">
            <Card_B title="Web Development" description="We build visually appealing, high-performing websites using modern technologies, optimized for speed, usability, and SEO to help your brand stand out online." />
            <Card_B title="Mobile Development" description="From iOS to Android, our native and cross-platform apps deliver intuitive UX, seamless performance, and reliable scalability to support your users and business growth." />
            <Card_B title="Computer Networking" description="We provide comprehensive networking solutions, including installation and maintenance of secure LAN/WAN infrastructures, ensuring secure, reliable connections for smooth business operations." />
            <Card_B title="Managed I.T Workplace" description="We equip workplaces with fast, secure IT infrastructure. We ensure enabling seamless communication, file sharing, and collaboration in a cost-effective environment. You are also secured with RFID, PINs, facial recognition, or fingerprints access controls" />
            <Card_B title="Solar Power Installation" description="Harness renewable energy, a wasteless and everlasting energy source.  We handle panel installation to smart energy distribution, tailored to meet your power needs reliably taking into account all necessary industry specification" />
            <Card_B title="CCTV Installations" description="Explore our Closed-circuit television (CCTV)cameras that go beyond video surveillance and provide high-quality cost-effective results. We tailor the technology to client’s preference - continuously or only as required to monitor a particular event." />
          </div>
          <Button
            className='book-appointment'
            data-scroll-to="header"
            text="Back to Top"
            icon={<FontAwesomeIcon className='fa fa-arrow-up' />}
            data-gsap-animate="fade-up" data-gsap-distance="sm"
          />
        </div>
      </div>
    </div>
  )
}

const CorePrinciple = ({ title, description, iconClassName, imageName, className, ...props }) => {
  return (
    <div className={`column square-item ${className ? className : ''}`} {...props}>
      <FontAwesomeIcon className={iconClassName || "fa fa-gem"} style={{ color: "white", opacity: 1 }} />
      <h3 className='column__title'>{title}</h3>
      <span>{description}</span>
      <FontAwesomeIcon className={`background-icon ${iconClassName || "fa fa-gem"}`} />
    </div>
  )
}

export default About