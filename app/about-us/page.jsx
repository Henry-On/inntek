import Hero from '@/components/Hero'
import Image from 'next/image'
import { ServiceCardA } from '@/components/cards'
import SectionIcon from '@/components/SectionIcon'
import React from 'react'
import { ButtonLink } from '@/components/buttons'
import { SectionTitle } from '../home/page'
import HeroContainer from '@/components/HeroContainer'
import FixedBackgroundToColumn from '../home/FixedBackgroundToColumn'

const About = () => {

    const DesktopColumn = () => {
        return (
            <>
                <div className="container-image">
                    <img className='hero-image' src="/images/people-users.png" alt='hero-man-holding-laptop' />
                </div>
                <div className="container-image xl">
                    <img className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' />
                </div>
            </>
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
                    button={<a href="" className='ibtn'>Read More</a>}
                // alignImage='right'
                />
            </HeroContainer>
            <div className='about__introduction'>
                <div className='content introduction_content'>
                    <h3 className='itext-primary fw-lighter small'>Indigeneous I.T Company</h3>
                    <h1 className='font-heading fw-bold title'>Innovation Radii</h1>
                    <p>INN RADII is a home-grown IT leader committed to empowering organizations in today’s digital age. Well known for delivering end-to-end solutions that drive efficiency, innovation, and sustainable growth across multiple industries.</p>
                    <img src="/images/illustration-building.png" alt="" width={100} />
                </div>
            </div>
            <div className="about__cores ">
                <div className="content text-center">
                    <div className='d-none flex-column gap-1 align-items-center' style={{ maxWidth: "568px", margin: "auto" }}>
                        <h3 className='section-title'>Operation Principles</h3>
                        <p>We have clearly defined principles and standards that guide every solution we deliver. This is how we ensure consistency, and quality outcomes every time.</p>
                        <SectionIcon icon="fa fa-gem" />
                    </div>
                    <div className="core-columns">
                        <CorePrinciple
                            title="Our Values"
                            description="We value core principles of operation, building an agile, tech forward environment that enables organizations to thrive,  eliminating inefficiencies and  redundant procedures"
                            imageName="core-values.svg"
                        />
                        <CorePrinciple
                            title="Our Mission"
                            description="To deliver transformative, user-focused tech products and services that are reliable, user-focused, enhance everyday life, and drive sustainable digital growth" imageName="core-mission.svg"
                            isActive={true}
                        />
                        <CorePrinciple
                            title="Commitment"
                            description="We’re fueled by innovation, committed to continuous improvement, creative thinking, and pushing boundaries to build impactful solutions and exceed expectations"
                            imageName="core-diamond.svg"
                        />
                    </div>
                </div>
            </div>
            <div className="about__stories">
                <div className="content">
                    <div className='content-wrapper'>
                        <Story
                            title="Growth"
                            imageName="networking.png"
                            icon="fas fa-parachute-box"
                        >
                            From a small team with a bold vision, we've grown into a tech company serving multiple industries with pride. While we’ve made great strides, the journey is just beginning—and we’re just getting started
                        </Story>
                        <Story title="The Journey" imageName="networking-2.png" className="flex-reversed">
                            What began as a three-person web-design team has evolved into a multidisciplinary tech firm. Step by step, we’ve added mobile apps, networking, IoT, and renewable-energy capabilities—always guided by our commitment to lasting, high-impact solutions
                        </Story>
                    </div>
                </div>
            </div>
            <FixedBackgroundToColumn
                backgroundImage="/images/hero-background.png"
                columnImage={<DesktopColumn />}
                className="about__why-us"
            >
                <div className="text-content">
                    <div className="my-2 mt-lg-0">
                        <p className='itext-primary small'>Our Team / Services</p>
                        <SectionTitle title="How We Are Different" Tag='h3' />
                    </div>
                    <ul className='qualities-list'>
                        <li>We are ontinuously improving and exploring new ideas to develop powerful, modern solutions</li>
                        <li>We are customer-centric: Listening, adapting, and delivering based on your goals and feedback</li>
                        <li>We operate transparently and with full accountability in every engagement</li>
                        <li>Collaboration – Our best work happens through teamwork and shared insight</li>
                        <li>We don’t cut corners; we focus on excellence in everything we build</li>
                        <li>Agility – Ready to adapt, pivot, and grow with emerging trends and technologies.</li>
                        <li>We value security & privacy, your data is safe with us. Always.</li>
                    </ul>
                    <ButtonLink href="./contact-us" text="Contact Us" icon={<i className='icon fa fa-caret-right'></i>} />

                </div>
            </FixedBackgroundToColumn>
            <div className="about__our-services">
                <div className="content">
                    <div className="heading-caption">
                        <SectionTitle title="Our services" />
                        <a href="./our-services" style={{ fontWeight: "lighter" }}>All <i className='fa fa-caret-right'></i></a>
                    </div>
                    <div className='service-cards'>
                        <ServiceCardA title="Web Development" description="We build visually appealing, high-performing websites using modern technologies, optimized for speed, usability, and SEO to help your brand stand out online." />
                        <ServiceCardA title="Mobile Development" description="From iOS to Android, our native and cross-platform apps deliver intuitive UX, seamless performance, and reliable scalability to support your users and business growth." />
                        <ServiceCardA title="Computer Networking" description="We provide comprehensive networking solutions, including installation and maintenance of secure LAN/WAN infrastructures, ensuring secure, reliable connections for smooth business operations." />
                        <ServiceCardA title="Managed I.T Workplace" description="We equip workplaces with fast, secure IT infrastructure. We ensure enabling seamless communication, file sharing, and collaboration in a cost-effective environment. You are also secured with RFID, PINs, facial recognition, or fingerprints access controls" />
                        <ServiceCardA title="Solar Power Installation" description="Harness renewable energy, a wasteless and everlasting energy source.  We handle panel installation to smart energy distribution, tailored to meet your power needs reliably taking into account all necessary industry specification" />
                        <ServiceCardA title="CCTV Installations" description="Explore our Closed-circuit television (CCTV)cameras that go beyond video surveillance and provide high-quality cost-effective results. We tailor the technology to client’s preference - continuously or only as required to monitor a particular event." />
                    </div>
                </div>
            </div>
            <div className="book-appointment">
                <div className="content pt-0">
                    <div className='starter-notice'>
                        <p className='text max-width-text'>Ready to Innovate? Let’s discuss how we can accelerate your digital transformation</p>
                        <ButtonLink href="./contact-us" text="Book Appointment" />
                    </div>
                </div>
            </div>
        </div>

    )
}

const Story = ({ imageName, title, children, className, icon }) => {
    return (
        <div className={`column ${className ? className : ""}`}>
            <div className="column__image-wrapper">
                <img src={`/images/${imageName}`} alt="" />
            </div>
            <div className='column__content'>
                <div className="column__content-inner">
                    <SectionTitle Tag="h3" className='column__title' title={title} />
                    {children}
                </div>
                <i className={`icon ${icon ? icon : "fa fa-arrow-right"}`}></i>
            </div>
        </div>
    )
}

const CorePrinciple = ({ title, description, imageName, isActive = false }) => {
    return (
        <div className={`column square-item ${isActive ? "active" : ""}`}>
            <h3 className='column__title'>{title}</h3>
            {description}
            <div className="wrapper-image">
                <img className='column__image' src={`/images/icons/${imageName}`} alt="" />
            </div>
        </div>
    )
}

export default About