import React from 'react'
import ContactInfoItem from '@/components/ContactInfoItem';
import FacebookPageClient from '@/components/footer/FacebookPageClient';
import Newsletter from './Newsletter'
import FooterAttribution from './FooterAttribution';

function Footer() {

  return (
    <div className="footer" >
      <div className="content">
        <div className='column top-row'>
          <div>
            <div className="brand-logo">
              <img src="/images/logo-footer.png" alt="brand-logo" />
            </div>
            <div className="text-black">
              Trusted by businesses to deliver reliable, innovative tech solutions with integrity, professionalism, and a focus on results
            </div>
          </div>
          <Newsletter />
        </div>
        <div className='column wrapper-links'>
          <div>
            <span className='caption'>Quick Links</span>
            <ul className='links'>
              <li><a href="/" >Home</a></li>
              <li><a href="./contact-us" >Contact Us</a></li>
              <li><a href="#" >Read Our Blog</a></li>
              <li><a href="#" >Frequently Asked Questions</a></li>
              <li><a href="#" >Partner with Us</a></li>
              <li><a href="#" >Careers</a></li>
            </ul>
          </div>
          <div className="social-media-handles">
            <span className="caption">Connect with Us</span>
            <ul className='social-media-links' style={{ marginBottom: "16px" }}>
              <li><a href="#" className="fab fa-twitter"></a></li>
              <li><a href="#" className="fab fa-instagram"></a></li>
              <li><a href="#" className="fab fa-linkedin-in"></a></li>
            </ul>
            <FacebookPageClient />
          </div>
        </div>

        <div className='footer-contact-info'>
          <span className="caption">Contact Info</span>
          <div className="wrapper-cards">
            <ContactInfoItem
              icon="fas fa-envelope"
              label="Email address"
              value="support@innradii.com"
              className="footer-contact-info"
            />
            <ContactInfoItem
              icon="fas fa-phone-volume"
              label="Call No"
              value="08144447196, 09029198353"
              className="footer-contact-info"
            />
            <ContactInfoItem
              icon="fab fa-whatsapp"
              label="WhatsApp"
              value="09029198353"
              className="footer-contact-info"
            />
          </div>
        </div>

      </div>
      <FooterAttribution />
    </div>
  )
}

export default Footer