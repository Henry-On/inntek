import React from 'react'
import { Card_C, Card_A } from '@/components/cards'
import { ButtonLink } from '@/components/buttons'
import Testimonials from '@/components/testimonial/Testimonials'
import InputField from '@/components/form/InputField'
import TextareaField from '@/components/form/TextareaField'
import SelectField from '@/components/form/SelectField'
import FormElement from '@/components/form/FormElement'
import HeroContainer from '@/components/HeroContainer'
import HeroCarousel from './HeroCarousel'
import SectionIcon from '@/components/SectionIcon'
import { contactFormSubjects } from '@/storage/contactFormSubjects'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'
import IndustryListGrid from './IndustryListGrid'
import BlogPosts from '@/components/BlogPosts'

const Home = () => {

  const ProcedureState = ({ stageNumber, title, description, icon, className, ...props }) => {
    return (
      <li className={`procedure-stage ${className}`} data-process={stageNumber} {...props}>
        <h2 className='title'>{title}</h2>
        <div className='description-wrapper'>
          <p>{description}</p>
          {icon}
        </div>
      </li>
    )
  }

  const BusinessStrategyItem = ({ title, iconClassName, backgroundColor }) => {
    return (
      <li className='business-strategy-item'>
        <FontAwesomeIcon className={iconClassName} />
        {title}
      </li>
    )
  }

  const BusinessStrategies = ({ ...props }) => {
    return (
      <ul {...props}>
        <BusinessStrategyItem title="Data-driven Decision" iconClassName="fas fa-database" />
        <BusinessStrategyItem title="Smarter Technology" iconClassName="far fa-clock" />
        <BusinessStrategyItem title="Growth-ready systems" iconClassName="fas fa-seedling" />
      </ul>
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
              <img src="/images/people-users-3.png" alt="" />
            </div>
            <div className="text-content" data-gsap-animate="stagger-fade-up" data-gsap-distance="md">
              <h2 className='section-title'>Solutions for Real Business Challenges</h2>
              <BusinessStrategies className="business-strategies" />
              <p>At INN RADII, we harness technology to help businesses design, streamline, and implement smart solutions. Our goal is to simplify operations, maximize efficiency, and support growth across multiple industries with tailored service</p>
            </div>
          </div>
          <div className="wrapper-cards" data-gsap-animate="stagger-zoom-in" data-gsap-stagger="0.35">
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
      <div className='industries' data-gsap-trigger="pinned-content">
        <div className="content">
          <div className="wrapper-columns">
            <div className="top-container" id="pinned-content">
              <div data-gsap-animate="stagger-fade-up" data-gsap-distance="sm" data-gsap-stagger="0.12">
                <span className='section-info' > Industries</span>
                <h3 className='section-title item-heading'>We Serve Your Industry</h3>
                <span className="d-block">Whether you're looking to implement a new system, upgrade your infrastructure, or need ongoing support. We will help you find the right solution for your business.</span>
                <ul className="list-items" >
                  <li className="item">For Reliability</li>
                  <li className="item">Industry Standards</li>
                  <li className="item">Scalability</li>
                  <li className="item">Growth and Efficiency</li>
                </ul>
              </div>
            </div>
            <div className='bottom-container'>
              <IndustryListGrid />
              <ButtonLink
                className="action-button"
                text="Request Services"
                href="./our-services"
                icon={<FontAwesomeIcon 
                  className="fas fa-long-arrow-alt-right"  
                />}
                data-gsap-animate="fade-up"
                data-gsap-distance="sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="start-up">
        <div className="content">
          <div className='top-content text-left text-black pb-lg-3'>
            <div className="main-text">
              <span className='mini-heading d-xl-none' data-gsap-animate="fade-down" data-gsap-distance="sm">End-to-End</span>
              <h2 className='section-title'>Solutions for Startups</h2>
              From Idea to launch - we build, scale, and support your product every step of the way
            </div>
            <ButtonLink
              className="d-none d-xl-inline-flex"
              text="Book Appointment"
              icon={<FontAwesomeIcon 
                className="fas fa-calendar-alt"
                style={{color:"orangered", fontSize:"16px"}}
              />}
              iconPosition="left"
            />
          </div>
          <div className='wrapper-cards' data-gsap-animate="stagger-fade-up" data-gsap-distance="sm" data-gsap-stagger="0.18">
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
            <div className='get-started-main' data-gsap-animate='stagger-fade-up' data-gsap-distance="md" data-gsap-stagger="0.25">
              <p className='get-started-headline' >
                Ready to launch your startup? Whether you're validating your concept or preparing MVP development, we’ll guide every step.
              </p>
              <p className='get-started-subtitle' >
                Get started today, launch fast, scale smart, and reduce risk with expert engineering and growth-focused support.
              </p>
            </div>

            <div className='get-started-features'>
              <h4 className='features-caption' data-gsap-animate='zoom-in' >Startup Toolkit</h4>
              <ul className='features-list' data-gsap-animate='split-text' data-gsap-splitby="lines">
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
          <div className="container-service-cards" data-gsap-animate="stagger-fade-up" data-gsap-distance="sm" data-gsap-stagger="0.18">
            <Card_A
              icon={<FontAwesomeIcon className='fas fa-code' style={{ color: "#0071eb" }} />}
              title="Web Design and Development"
              description="We build visually appealing, high-performing websites using modern technologies, optimized for speed, usability, and SEO to help your brand stand out online"
            />
            <Card_A
              icon={<FontAwesomeIcon className='fas fa-laptop' style={{ color: "green" }} />}
              title="Enterprise Application Development"
              description="Design and development of aesthetically beautiful and functional website. Our sites are responsive and SEO super friendly"
            />

            <Card_A
              icon={<FontAwesomeIcon className='fas fa-tablet-alt' style={{ color: "blue" }} />}
              title="Mobile Applications Development"
              description="From iOS to Android, our native and cross-platform apps deliver intuitive UX, seamless performance, and reliable scalability to support your users and business growth"
            />

            <Card_A
              icon={<FontAwesomeIcon className='fas fa-network-wired' />}
              title="Computer Networking and Engineering"
              description="We provide comprehensive networking solutions, including installation and maintenance of secure LAN/WAN infrastructures, ensuring secure, reliable connections for smooth business operations"
            />
            <Card_A
              icon={<FontAwesomeIcon className='fas fa-video' style={{ color: "orange" }} />}
              title="CCTV Solutions"
              description="Explore our Closed-circuit television (CCTV) cameras that go beyond video surveillance and provide high-quality cost-effective results. We tailor our solution to client’s preference or as required to deliver optimum coverage."
            />
            <Card_A
              icon={<FontAwesomeIcon className='fas fa-solar-panel' style={{ color: "#b79f00" }} />}
              title="Solar Energy Solutions"
              description="Harness renewable energy, a wasteless and everlasting energy source. We handle panel installation to smart energy distribution, tailored to meet your power needs reliably taking into account all necessary industry specification"
            />
          </div>
        </div>
        <img className='svg-services-pointer' alt="" src="images/services-pointer.svg" />
      </div>

      <div className="work-procedures" id='work-procedures'>
        <div className="content">
          <div className='top-container' data-gsap-animate="stagger-fade-up">
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
          <ul className='container-stages hide-x-scrollbar' data-gsap-animate="zoom-in">
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
          <div className='max-width-text text-center d-flex flex-column gap-1 pb-lg-4 align-items-center' data-gsap-animate="stagger-fade-up">
            {/* <SectionIcon
              icon="fa fa-gem"
              style={{ color: "#efd600", backgroundColor: "#ffffff" }}
            /> */}
            <h2 className='section-title pseudo-underline'>Why Choose Us</h2>
            <span className='d-block'>Our commitment to you is beyond just technology. See why we are exceptional</span>
          </div>

          <div className="image-container">
            <img src="/images/portrait-hero.png" alt="" className='why-us-image' />
            <div className="container-cards" data-gsap-animate="stagger-zoom-in" data-gsap-stagger="0.4">
              <Card_A
                icon={"fas fa-sync-alt"}
                title="Strategy and Process"
                description="We follow a clearly defined process for every project which ensures each solution is thoughtful, scalable, and aligned with your business needs"
              />
              <Card_A
                icon={"fas fa-globe"}
                title="Diversification"
                description="We serve businesses across various sectors, from healthcare and retail to finance and logistics with deep knowledge and customized solutions for each industry"
              />
              <Card_A
                icon={"fas fa-gem"}
                title="Quality Driven"
                description="We prioritize excellence in delivery—not just to complete projects, but to exceed expectations with lasting impact."
              />
              <Card_A
                icon={"fas fa-hands-helping"}
                title="Customer-Centric Approach"
                description="We put our clients at the center of everything we do; listening closely, adapting quickly, and delivering solutions that are tailored to real needs"
              />
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <BlogPosts />

      <div className="home-contact">
        <div className="content pt-0">
          <div className="image-background">
            <div className='column content-top max-width-text pseudo-underline' data-gsap-animate="stagger-fade-up">
              <span className='arrow-pointer'>Next Step</span>
              <h3 className='section-title'>Get in Touch</h3>
              <span className='d-block'>
                Have a question or ideas? Don’t overthink it.
                We are passionate about playing a part of your success story. With us, you're in capable hands - Let’s talk about your project. Complete the form and hit the send button to send us a quick message
              </span>
            </div>
            <FormElement formType="homeContact" className="column home-form" buttonText="Send Message" buttonWrapperClass="button-wrapper">
              <div className="form-inputs" data-gsap-animate="stagger-fade-up">
                <div className='columns'>
                  <div className='column'>
                    <InputField
                      name="name"
                      placeholder="Jane Doe"
                      label="Name"
                      required
                    />
                  </div>
                  <div className='column'>
                    <InputField
                      name="email"
                      type="email"
                      placeholder="example@domain.com"
                      label="Your Email"
                      required
                    />
                  </div>
                </div>
                <SelectField
                  name="subject"
                  label="Email subject"
                  data={contactFormSubjects}
                  required
                />
                <TextareaField name="message" placeholder="Hi, my name is ..." label="Your Message" required />
              </div>
            </FormElement>
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
