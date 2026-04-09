import Hero from '@/components/Hero'
import Image from 'next/image'
import HeroContainer from '@/components/HeroContainer'
import React from 'react'
import FormElement from '@/components/form/FormElement'
import InputField from '@/components/form/InputField'
import SelectField from '@/components/form/SelectField'
import TextareaField from '@/components/form/TextareaField'
import { contactFormSubjects } from '@/storage/contactFormSubjects'

const Contact = () => {
    return (
        <div className='contact-page'>
            <HeroContainer backgroundOverlayColor="#030f2fc9">
                <Hero
                    image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{ width: "auto", height: "100%" }} />}
                    breadCrumb="/ contact-us"
                    title="Need Help? Let's talk"
                    description="Our Customers and partners are the heart of everything we stand for. Whether you're seeking support, have a question, or just want to share your thought. We are available to help, any day, any time"
                    // button={<a href="" className='ibtn'>Read More</a>}
                    alignImage='right'
                />
            </HeroContainer>

            <div>
                <div className="content">
                    {/* <div className='max-width-text'> */}
                        <div className='text-center'>
                            <h2 className="section-title">Drop a message for us</h2>
                            Short on time? No worries.<br />
                            Fill out the form below, and we’ll get back to you promptly.
                        </div>
                        <FormElement className="form-contact-page"buttonText='Send Message' >
                            <div className='wrapper-row-input'>
                                <InputField type='text' placeholder="Your name..." label="Names" />
                                <InputField type='email' placeholder="Contact email address" label="Contact Email" />
                            </div>
                            <SelectField label="Select a subject" data={contactFormSubjects} />
                            <TextareaField placeholder="Type your message here..." label="Message" />
                        </FormElement>
                    {/* </div> */}
                </div>
            </div>

            <div className="info-text">
                <div className="content">
                    <div className="max-width-text text-center">
                        <span className='itext-primary small'>Get in touch</span>
                        <h2 className='section-title'>Not sure what improvement your business needs?</h2>
                        Our team will take the time to understand your operations, identify challenges, and recommend the right technology to boost your efficiency, and improve growth. Let us handle the technical side while you focus on what matters most
                    </div>
                    <div className="wrapper-cards">
                        <InfoCard
                            icon="fas fa-envelope"
                            label="Email address"
                            value="support@innradii.com"
                        />
                        <InfoCard
                            icon="fas fa-phone-volume"
                            label="Call No"
                            value="08144447196"
                        />
                        <InfoCard
                            icon="fab fa-whatsapp"
                            label="WhatsApp Line"
                            value="09029198353"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

const InfoCard = ({icon, label, value}) => {
    return (
        <div className="card info-card">
            <i className={`icon ${icon}`} />
            <div className="right">
                <span className="label">{label}</span>
                <p style={{color:"#000"}}>{value}</p>
            </div>
        </div>
    )
}

export default Contact