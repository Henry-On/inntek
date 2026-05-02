import React from 'react'
import { Card_C, Card_A } from '@/components/cards'
import { ButtonLink } from '@/components/buttons'
import Testimonials from '@/components/testimonial/Testimonials'
import InputField from '@/components/form/InputField'
import TextareaField from '@/components/form/TextareaField'
import FormElement from '@/components/form/FormElement'
import SelectField from '@/components/form/SelectField'
import HeroContainer from '@/components/HeroContainer'
import HeroCarousel from './HeroCarousel'
import SectionIcon from '@/components/SectionIcon'
import { contactFormSubjects } from '@/storage/contactFormSubjects'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'
import IndustryListGrid from './IndustryListGrid'

const Home = () => {

  const StartupCard = ({ title, description, imageName, ...props }) => {
    return (
      <div className={`card card-B  startup-card ${props.className || ''}`} data-gsap-animate="zoomin" {...props}>
        <div className="image-wrapper">
          <img src={`/images/icons/${imageName}`} alt='' />
        </div>
        {/* <div className="contents" > */}
        <h2 className="title">{title}</h2>
        {description}
        {/* </div> */}
      </div>

    )
  }

  const ProcedureState = ({ stageNumber, title, description, icon, className, ...props }) => {
    return (
      <li className={`procedure-stage ${className}`} data-process={stageNumber} {...props}>
        <h2 className='title'>{title}</h2>
        <p className='description'>{description}</p>
        {icon}
      </li>
    )
  }

  return (
    <>
      <HeroContainer>
        <HeroCarousel />
      </HeroContainer>
      <div className='solutions'>
        <div className="content">
          <div className='top-container'>
            <div className="image-wrapper">
              <img src="/images/hero-background.png" alt="" />
            </div>
            <div className="text-content">
              <span className='small itext-primary' data-gsap-animate="fade-down">Smarter Tech, Simpler Work</span>
              <h2 className='section-title' data-gsap-animate="fade-up">Solutions for Real Business Challenges</h2>
              <p data-gsap-animate="fade-up">At INN RADII, we harness technology to help businesses design, streamline, and implement smart solutions. Our goal is to simplify operations, maximize efficiency, and support growth across multiple industries with tailored service</p>
            </div>
          </div>
          <div className="wrapper-cards">
            <Card_C
              title="Software Development"
              description="We build secure and scalable web and mobile apps, custom-made enterprise applications tailored to your brand and that optimize your business operations"
              imageName="service-globe.svg"
            />
            <Card_C
              title="Network Solutions"
              description="Delivering secure, high-speed connectivity for seamless communication across your entire organization"
              imageName="service-network.svg"
            />
            <Card_C
              title="Digitalization"
              description="Transforming manual workflows into smart, automated processes that boost efficiency and growth"
              imageName="service-digitalization.svg"
            />
          </div>
        </div>
      </div>
      <div className='industries' >
        <div className="content">
          <div className="wrapper-columns">
            <div className="top-container">
              <span className='section-info' data-gsap-animate="fade-down"> Industries</span>
              <div data-gsap-animate="fade-up">
                <h3 className='section-title item-heading'>We Serve Your Industry</h3>
                Whether you're looking to implement a new system, upgrade your infrastructure, or need ongoing support. We will help you find the right solution for your business.
              </div>
              <ul className="list-items">
                <li className="item">For Reliability</li>
                <li className="item">Industry Standards</li>
                <li className="item">Scalability</li>
                <li className="item">Growth and Efficiency</li>
              </ul>

            </div>
            <div className='bottom-container'>
              <IndustryListGrid />
              <ButtonLink
                className="ibtn-primary"
                text="Request Services"
                href="./our-services"
                icon={<FontAwesomeIcon icon="far fa-play-circle" />}
                iconPosition="left"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="start-up">
        <div className="content">
          <div className='text-left text-black pb-lg-3'>
            <span className='mini-heading' data-gsap-animate="fade-down">End-to-End</span>
            <h2 className='section-title'>Solutions for Startups</h2>
            From Idea to launch - we build, scale, and support your product every step of the way
          </div>
          <div className='wrapper-cards'>
            <Card_C
              title="Idea and Strategy"
              description="Workshop sessions, business analysis, brand identity designs, wireframes, and MVP planning. We work with you to validate your concept and create a clear roadmap that positions you for success."
              imageName="st-light.svg"
              className="startup-card"
            />
            <Card_C
              title="Design and Development"
              description="We develop customized solutions tailored to your specific needs, whether it's software, infrastructure, or service implementation. Our approach focuses on building systems that deliver measurable values"
              imageName="st-tools.svg"
              className="startup-card"
            />
            <Card_C
              title="Launch and Scale"
              description="Deployment, user testing, feedback cycles, support & maintenance, and feature upgrades. We stay involved through launch, monitor performance, gather and integrate user feedback, and help your business to scale sustainably."
              imageName="st-rocket.svg"
              className="startup-card"
            />
          </div>
          <div className='get-started'>
            <div className='get-started-main'>
              <p className='get-started-headline'>
                Ready to <strong style={{ color: "#e48500" }}>launch</strong> your startup? <br /> Whether you're validating <strong style={{ color: "#e48500" }}>your concept</strong> or preparing MVP development, <strong style={{ color: "#e48500" }}>we’ll guide every step</strong>.
              </p>
              <p className='get-started-subtitle'>
                Launch fast, scale smart, and reduce risk with expert engineering and growth-focused support.
              </p>
              {/* <ButtonLink
                text="Get Started today"
                href="./contact-us"
                className="ibtn-primary get-started-button"
                icon={<FontAwesomeIcon icon="far fa-play-circle" />}
                iconPosition="left"
              /> */}
            </div>

            <div className='get-started-features'>
              <h4 className='features-caption'>Startup Toolkit</h4>
              <ul className='features-list'>
                <li>Startup websites</li>
                <li>Dashboards</li>
                <li>MVP Development</li>
                <li>LAN Solutions</li>
                <li>Payment Gateway Integration</li>
                <li>App Launch and Support</li>
                <li>Landing Pages</li>
                <li>Analytics & Tracking System</li>
                <li>Meeting Room Setup</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="content">
          <div className='container-title text-center'>
            <h3 className='section-title text-white pseudo-underline'>Cutting-edge Solutions</h3>
            <p>From starting to finishing, all your tech solutions in one-piece</p>
          </div>
          <div className="container-service-cards">
            <Card_A
              imageName="service-globe.svg"
              title="Web Design and Development"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
            <Card_A
              imageName="service-globe.svg"
              title="Enterprise Application Development"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
            <Card_A
              imageName="service-globe.svg"
              title="Mobile Applications Development"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
            <Card_A
              imageName="service-globe.svg"
              title="Computer Networking and Engineering"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
            <Card_A
              imageName="service-globe.svg"
              title="CCTV Solutions"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
            <Card_A
              imageName="service-globe.svg"
              title="Solar Energy Solutions"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
            />
          </div>
        </div>
        <img className='svg-services-pointer' alt="" src="images/services-pointer.svg" />
      </div>

      <div className="work-procedures" id='work-procedures'>
        <div className="content">
          <div className='top-container'>
            <h3 className='section-title mb-2'>How We Work</h3>
            <p>At Inn Radii Technologies, we follow robust and industry standard  procedures. This is how we are to deliver satisfactory services and sustainable products to our clients and business associates.</p>
            {/* <div> */}
            <ul className="container-toggles hide-x-scrollbar">
              <li className='procedure-toggle active' data-process="1">
                <span className='stage-count'>1</span>
                Discovery and Definition
              </li>
              <li className='procedure-toggle' data-process="2">
                <span className='stage-count'>2</span>
                Planning
              </li>
              <li className='procedure-toggle' data-process="3">
                <span className='stage-count'>3</span>
                Building
              </li>
              <li className='procedure-toggle' data-process="4">
                <span className='stage-count'>4</span>
                Deployment
              </li>
            </ul>
            {/* </div> */}
          </div>
          <ul className='container-stages hide-x-scrollbar'>
            <ProcedureState
              className="active"
              stageNumber="1"
              title="Understanding of the problem"
              description="Understanding your needs is our first step toward building the right solution
                We study the existing challenges, evaluate current processes, and identify bottlenecks to define the right digital approach"
              icon={<i className='icon fas fa-lightbulb' aria-hidden="true" style={{ color: "#ffd000" }}></i>}
            />
            <ProcedureState
              stageNumber="2"
              title="Solution Planning"
              description="At this stage, our team jumps on the project and deploys the solution with precision—using the best technologies and proven practices."
              icon={<i className='icon fas fa-ruler-combined' aria-hidden="true" style={{ color: "violet" }}></i>}
            />
            <ProcedureState
              stageNumber="3"
              title="Solution Implementation"
              description="Based on insights, we design a practical, scalable solution aligned with your business goals and user expectations.
                At this stage, our team jumps on the project and deploys the solution with precision—using the best technologies and proven practices."
              icon={<i className='icon fas fa-tools' aria-hidden="true" style={{ color: "#00a927" }}></i>}
            />
            <ProcedureState
              stageNumber="4"
              title="Project / Product Delivery"
              description="We test, refine, and deliver a polished product, followed by ongoing support, feedback integration, and system monitoring."
              icon={<i className='icon fas fa-hands-helping' aria-hidden="true" style={{ color: "#a90052" }}></i>}
            />
          </ul>
        </div>
      </div>

      <div className="why-us">
        <div className="content pb-0">
          <div className='max-width-text text-center d-flex flex-column gap-1 align-items-center'>
            <SectionIcon
              icon="fa fa-gem"
              style={{ color: "#efd600", backgroundColor: "#ffffff" }}
            />
            <h2 className='section-title'>Why Choose Us</h2>
            Our commitment to you is beyond just technology. See why we are exceptional
          </div>
        </div>
        <div className="background-container">
          <div className="content position-relative">
            <img src="/images/portrait-hero.png" alt="smiley" className='png-desktop' />
            <div className="container-cards">
              <Card_A
                imageName="service-globe.svg"
                title="Web Design and Development"
                description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
              />
              <Card_A
                imageName="service-globe.svg"
                title="Web Design and Development"
                description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
              />
              <Card_A
                imageName="service-globe.svg"
                title="Web Design and Development"
                description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
              />
              <Card_A
                imageName="service-globe.svg"
                title="Web Design and Development"
                description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results."
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="home-contact">
        <div className="content pt-0">
          <div className="image-background">
            <div className='column content-top max-width-text pseudo-underline'>
              <span className='arrow-pointer'>Next Step</span>
              <h3 className='section-title'>Get in Touch</h3>
              Have a question or ideas? Don’t overthink it.
              We are passionate about playing a part of your success story. With us, you're in capable hands - Let’s talk about your project. Complete the form and hit the send button to send us a quick message
            </div>
            <form className="column home-form" action="">
              <div className="form-inputs">
                <div className='columns'>
                  <div className='column'>
                    <InputField
                      placeholder="Jane Doe"
                      label="Name"
                    />
                  </div>
                  <div className='column'>
                    <InputField
                      type="email"
                      placeholder="example@domain.com"
                      label="Your Email"
                    />
                  </div>
                </div>
                <SelectField
                  label="Email subject"
                  data={contactFormSubjects}
                />
                <TextareaField placeholder="Hi, my name is ..." label="Your Message" />
              </div>

              <div className="button-wrapper">
                <button className='ibtn'>Send Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>

    </>
  )
}

export const SectionTitle = ({ title, Tag = "span", className, ...props }) => {
  return (
    <Tag className={`section-title ${className}`} {...props} >{title}</Tag>
  )
}

export default Home