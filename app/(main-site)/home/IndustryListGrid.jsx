import React from 'react'
import IndustryList from './IndustryList'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'

const IndustryListGrid = () => {
    return (
        <div className="industry-list-grid" data-gsap-animate="stagger-fade-up" data-gsap-distance="sm" data-gsap-stagger="0.16">
            <IndustryList
                icon={<FontAwesomeIcon className='fa fa-user-nurse' />}
                // iconBackgroundColor="rgb(0 82 115)"
                backgroundColor="rgb(0 42 69)"
                title="Medical"
                description="Our goal is to empower teams, streamline processes, and create a more productive environment for both employees and employers to achieve sustainable growth"
            />
            <IndustryList
                icon={<FontAwesomeIcon className='fa fa-hand-holding-usd' />}
                // iconBackgroundColor="rgb(0 42 69)"
                backgroundColor="rgb(0 82 115)"
                title="HR and Finance"
                description="Whether it's optimizing workflows, automating routine tasks, or implementing tailored digital solutions, we ensure our services add measurable value to your organization."
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-network-wired" style={{ color: "white" }} />}
                // iconBackgroundColor="rgb(0 82 115)"
                backgroundColor={"rgb(0 73 55)"}
                title="IT Solutions"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-hashtag" style={{ color: "white" }} />}
                // iconBackgroundColor="rgb(0 73 55)"
                backgroundColor="rgb(0 60 84)"
                title="Infrastructure setup / Installations"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<FontAwesomeIcon className="fa fa-cog" style={{ color: "white" }} />}
                // iconBackgroundColor="rgb(0 60 84)"
                backgroundColor="rgb(68 60 0)"
                title="Manufacturing"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
        </div>
    )
}

export default IndustryListGrid
