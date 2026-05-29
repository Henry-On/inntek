import Hero from '@/components/Hero'
import Image from 'next/image'
import HeroContainer from '@/components/HeroContainer'
import React from 'react'
import FormElement from '@/components/form/FormElement'
import InputField from '@/components/form/InputField'
import SelectField from '@/components/form/SelectField'
import TextareaField from '@/components/form/TextareaField'
import { contactFormSubjects } from '@/storage/contactFormSubjects'
import FontAwesomeIcon from '@/components/FontAwesomeIcon'
import { ButtonLink } from '@/components/buttons'
import ContactInfoItem from '@/components/ContactInfoItem'

const Contact = () => {
    return (
        <div className='contact-page'>
            <HeroContainer backgroundOverlayColor="#030f2fc9">
                <Hero
                    image={<Image className='hero-image' src="/images/portrait-hero.png" alt='hero-man-holding-laptop' width={300} height={500} style={{ width: "auto", height: "100%" }} />}
                    breadCrumb="/ contact-us"
                    title="Need Help? Let's talk"
                    description="Our Customers and partners are the heart of everything we stand for. Whether you're seeking support, have a question, or just want to share your thought. We are available to help, any day, any time"
                    alignImage='right'
                    button={<ButtonLink
                        text="Drop a Message"
                        href="#user-message-form"
                        icon={<FontAwesomeIcon className="fa fa-arrow-down" />}
                        iconPosition="left"
                    />}
                />
            </HeroContainer>

            <div>
                <div className="content" id="user-message-form">
                    <div className='text-center' data-gsap-animate="fade-up" data-gsap-distance="50">
                        <h2 className="section-title">Drop a message for us</h2>
                        <span>Short on time? No worries.</span><br />
                        <span>Fill out the form below, and we’ll get back to you promptly.</span>
                    </div>
                    <FormElement className="form-contact-page" buttonText='Send Message' data-gsap-animate="stagger-fade-up" data-gsap-stagger="0.3">
                        <div className='wrapper-row-input'>
                            <InputField type='text' placeholder="Your name..." label="Names" />
                            <InputField type='email' placeholder="Contact email address" label="Contact Email" />
                        </div>
                        <SelectField label="Select a subject" data={contactFormSubjects} />
                        <TextareaField placeholder="Type your message here..." label="Message" />
                    </FormElement>
                </div>
            </div>

            <div className="info-text">
                <div className="content">
                    <div className="max-width-text text-center" data-gsap-animate="fade-up" data-gsap-distance="50">
                        <span className='itext-primary small'>Get in touch</span>
                        <h2 className='section-title'>Not sure what improvement your business needs?</h2>
                        <span>Our team will take the time to understand your operations, identify challenges, and recommend the right technology to boost your efficiency, and improve growth. Let us handle the technical side while you focus on what matters most</span>
                    </div>
                    <div className="wrapper-cards" data-gsap-animate="stagger-zoom-in">
                        <ContactInfoItem
                            icon="fas fa-envelope"
                            label="Email address"
                            value="support@innradii.com"
                        />
                        <ContactInfoItem
                            icon="fas fa-phone-volume"
                            label="Call No"
                            value="08144447196"
                        />
                        <ContactInfoItem
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

export default Contact