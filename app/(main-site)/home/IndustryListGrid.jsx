import React from 'react'
import IndustryList from './IndustryList'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'

const IndustryListGrid = () => {
    return (
        <div className="industry-list-grid" data-gsap-animate="stagger-fade-up" data-gsap-distance="sm" data-gsap-stagger="0.16">
            <IndustryList
                icon={<FontAwesomeIcon className='fa fa-user-nurse' />}
                iconBackgroundColor="#280080"
                title="Medical"
                description="Our goal is to empower teams, streamline processes, and create a more productive environment for both employees and employers to achieve sustainable growth"
            />
            <IndustryList
                icon={<FontAwesomeIcon className='fa fa-hand-holding-usd' />}
                iconBackgroundColor="rgb(0, 115, 23)"
                title="HR and Finance"
                description="Whether it's optimizing workflows, automating routine tasks, or implementing tailored digital solutions, we ensure our services add measurable value to your organization."
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-network-wired" style={{ color: "white" }} />}
                iconBackgroundColor="rgb(255, 196, 0)"
                title="IT Solutions"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-hashtag" style={{ color: "white" }} />}
                iconBackgroundColor="#a10013ff"
                title="Infrastructure setup / Installations"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-cog" style={{ color: "white" }} />}
                iconBackgroundColor="#000000ff"
                title="Manufacturing"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
        </div>
    )
}

export default IndustryListGrid
