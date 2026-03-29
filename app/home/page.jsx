import React from 'react'
import Image from 'next/image'
import { ServiceCardB } from '@/components/cards'
import Card_A from "@/components/cards/Card_A"
import { ButtonLink } from '@/components/buttons'
import IndustryList from './IndustryList'
import bgImg2 from "@/public/images/persons-three.png"
import Testimonials from '@/components/testimonial/Testimonials'
import InputField from '@/components/form/InputField'
import TextareaField from '@/components/form/TextareaField'
import FormElement from '@/components/form/FormElement'
import SelectField from '@/components/form/SelectField'
import HeroContainer from '@/components/HeroContainer'
import HeroCarousel from './HeroCarousel'
import SectionIcon from '@/components/SectionIcon'
import { contactFormSubjects } from '@/storage/contactFormSubjects'
import FixedBackgroundToColumn from './FixedBackgroundToColumn'

const Home = () => {

  const StartupCard = ({ title, description, imageName, ...props }) => {
    return (
      <div className={`card card-B  startup-card`} {...props}>
        <div className="image-wrapper">
          <img src={`/images/icons/${imageName}`} alt='' />
        </div>
        <div className="contents">
          <h2 className="title">{title}</h2>
          {description}
        </div>
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

  const LeftContainer = () => {
    return (
      <div className="container-images">
        <div className='image-wrapper'>
          <Image src={bgImg2} alt='' fill style={{ objectFit: "cover" }} />
        </div>
        <SectionIcon
          icon="fas fa-rocket"
          className="icon-flight"
        />
        <div className='text'>
          <p className='title'>Get started today</p>
          <p>Let us help you find the right solution for your business. Whether you're looking to implement a new system, upgrade your infrastructure, or need ongoing support, we have the expertise to guide you every step of the way.</p>
        </div>
      </div>
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
              <span className='small itext-primary'>Smarter Tech, Simpler Work</span>
              <h2 className='section-title'>Solutions for Real Business Challenges</h2>
              At INN RADII, we harness technology to help businesses design, streamline, and implement smart solutions. Our goal is to simplify operations, maximize efficiency, and support growth across multiple industries with tailored service
            </div>
          </div>
          <div className="wrapper-cards">
            <ServiceCardB
              title="Software Development"
              description="We build secure and scalable web and mobile apps, custom-made enterprise applications tailored to your brand and that optimize your business operations"
              imageName="service-globe.svg"
            />
            <ServiceCardB
              title="Network Solutions"
              description="Delivering secure, high-speed connectivity for seamless communication across your entire organization"
              imageName="service-network.svg"
            />
            <ServiceCardB
              title="Digitalization"
              description="Transforming manual workflows into smart, automated processes that boost efficiency and growth"
              imageName="service-digitalization.svg"
            />
          </div>
        </div>
      </div>
      <div className='industries' >
        <div className='top-container content gap-1 pt-5 pb-5'>
          <span className='small itext-primary'>Industries</span>
          <h3 className='section-title item-heading'>We Serve Your Industry</h3>
          We are fully committed to delivering high-quality, innovative tech solutions that simplify business operations across every industry.
        </div>

        <FixedBackgroundToColumn
          // className="industries"
          backgroundImage="/images/hero-background.png"
          columnImage={<LeftContainer />}
        >
          <IndustryList
            icon={<i className="fa fa-user-nurse" style={{ color: "#200659ff" }} ></i>}
            title="Medical"
            description="Our goal is to empower teams, streamline processes, and create a more productive environment for both employees and employers to achieve sustainable growth"
          />
          <IndustryList
            icon={<i className="fa fa-hand-holding-usd" style={{ color: "#065917ff" }} ></i>}
            title="HR and Finance"
            description="Whether it's optimizing workflows, automating routine tasks, or implementing tailored digital solutions, we ensure our services add measurable value to your organization."
          />
          <IndustryList
            icon={<i className="fa fa-network-wired" style={{ color: "#c6c300ff" }} ></i>}
            title="IT Solutions"
            description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
          />
          <IndustryList
            icon={<i className="fa fa-hashtag" style={{ color: "#a10013ff" }} ></i>}
            title="Insfrastural setup / Installations"
            description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
          />
          <IndustryList
            icon={<i className="fa fa-cog" style={{ color: "#000000ff" }} ></i>}
            title="Manufacturing"
            description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
          />
          <ButtonLink className="ibtn-primary" text="Request Services" href="./our-services" style={{ marginTop: "16px" }} />
        </FixedBackgroundToColumn>
      </div>

      <div className="start-up">
        <div className="content">
          <div className='text-center text-black'>
            <span className='small itext-primary'>End-to-End</span>
            <h2 className='section-title'>Solutions for Startups</h2>
            From Idea to launch - we build, scale, and support your product every step of the way
          </div>
          <div className='wrapper-cards'>
            <StartupCard
              title="Idea and Strategy"
              description="Workshop sessions, business analysis, brand identity designs, wireframes, and MVP planning. We work with you to validate your concept and create a clear roadmap that positions you for success."
              imageName="st-light.svg"
            />
            <StartupCard
              title="Design and Development"
              description="We develop customized solutions tailored to your specific needs, whether it's software, infrastructure, or service implementation. Our approach focuses on building systems that deliver measurable values"
              imageName="st-tools.svg"
            />
            <StartupCard
              title="Launch and Scale"
              description="Deployment, user testing, feedback cycles, support & maintenance, and feature upgrades. We stay involved through launch, monitor performance, gather and integrate user feedback, and help your business to scale sustainably."
              imageName="st-rocket.svg"
            />
          </div>
          <div className='get-started'>
            <div className='get-started-main'>
              <p className='get-started-headline'>
                Ready to <strong style={{ color: "#e48500" }}>launch</strong> your? startup Whether you're validating <strong style={{ color: "#e48500", textDecoration: "underline" }}>your concept</strong> or preparing MVP development, <strong style={{ color: "#e48500" }}>we’ll guide every step</strong>.
              </p>
              <p className='get-started-subtitle'>
                Launch fast, scale smart, and reduce risk with expert engineering and growth-focused support.
              </p>
              <ButtonLink text="Get Started today" href="./contact-us" className="ibtn-primary get-started-button" />
            </div>

            <div className='get-started-features'>
              <h4>Startup Toolkit</h4>
              <ul className='service-list'>
                <li>Startup websites</li>
                <li>Admin dashboards</li>
                <li>MVP development</li>
                <li>LAN solutions</li>
                <li>Payment integration</li>
                <li>App launch support</li>
                <li>Landing pages</li>
                <li>Analytics & tracking</li>
                <li>Meeting room setup</li>
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
        <img className='svg-services-pointer' alt=""  src="images/services-pointer.svg" />
      </div>

      <div className="work-procedures" id='work-procedures'>
        <div className="content">
          <div className='max-width-text text-center'>
            <h3 className='section-title mb-2'>How We Work</h3>
            <p>At Inn Radii Technologies, we follow robust and industry standard  procedures. This is how we are to deliver satisfactory services and sustainable products to our clients and business associates.</p>
          </div>
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
            <div className='content-top max-width-text pseudo-underline'>
              <span className='arrow-pointer'>Next Step</span>
              <h3 className='section-title'>Get in Touch</h3>
              Have a question or ideas? Don’t overthink it.
              We are passionate about playing a part of your success story. With us, you're in capable hands - Let’s talk about your project. Complete the form and hit the send button to send us a quick message
            </div>
            <FormElement className="home-form" action="">
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
              <TextareaField placeholder="Your message..." label="Your Message" />
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