import React from 'react'
import IndustryList from './IndustryList'

const IndustryListGrid = () => {
    return (
        <div className="industry-list-grid">
            <IndustryList
                icon={<i className="fa fa-user-nurse" style={{ color: "rgb(40, 0, 128)" }} ></i>}
                title="Medical"
                description="Our goal is to empower teams, streamline processes, and create a more productive environment for both employees and employers to achieve sustainable growth"
            />
            <IndustryList
                icon={<i className="fa fa-hand-holding-usd" style={{ color: "rgb(0, 115, 23)" }} ></i>}
                title="HR and Finance"
                description="Whether it's optimizing workflows, automating routine tasks, or implementing tailored digital solutions, we ensure our services add measurable value to your organization."
            />
            <IndustryList
                icon={<i className="fa fa-network-wired" style={{ color: "rgb(255, 196, 0)" }} ></i>}
                title="IT Solutions"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<i className="fa fa-hashtag" style={{ color: "#a10013ff" }} ></i>}
                title="Infrastructure setup / Installations"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
            <IndustryList
                icon={<i className="fa fa-cog" style={{ color: "#000000ff" }} ></i>}
                title="Manufacturing"
                description="Our products and services span across different industries, with years of experiences in crafting long lasting solutions"
            />
        </div>
    )
}

export default IndustryListGrid