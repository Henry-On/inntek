import React from 'react'
import { ContactInfoItem } from '@/app/contact-us/page';
import FacebookPageClient from '@/components/footer/FacebookPageClient';
import Newsletter from './Newsletter'

function Footer() {
  return (
    <div className="footer" >
      <div className="content">
        <div className='footer-top wrapper-columns wrapper-lv-1'>
          <div className='column' >
            <div className="brand-logo">
              <img src="/images/logo-footer.png" alt="brand-logo" />
            </div>
          </div>
          <div className='column wrapper-columns wrapper-lv-2' >
            <div className='column'>
              <div className="text-black">
                Trusted by businesses to deliver reliable, innovative tech solutions with integrity, professionalism, and a focus on results
              </div>
            </div>
            <div className='column wrapper-columns wrapper-lv-3'>
              <div className='column'>
                <span className='caption'>Quick Links</span>
                <ul className='links'>
                  <li><a href="/contact-us" >Contact Us</a></li>
                  <li><a href="#" >Read Our Blog</a></li>
                  <li><a href="#" >Frequently Asked Questions</a></li>
                  <li><a href="#" >Partner with Us</a></li>
                  <li><a href="#" >Careers</a></li>
                </ul>
              </div>
              <div className='column'>
                <span className="caption">Connect with Us</span>
                <ul className='social-media-links'>
                  <li><a href="#" className="fab fa-twitter"></a></li>
                  <li><a href="#" className="fab fa-instagram"></a></li>
                  <li><a href="#" className="fab fa-linkedin-in"></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-center wrapper-columns" >
          <Newsletter />
          <div className='wrapper-columns wrapper-lv-2'>
            <div className='column footer-contact-info'>
              {/* <span className="caption">Contact Info</span> */}
              <div className="wrapper-cards">
                <ContactInfoItem
                  icon="fas fa-envelope"
                  label="Email address"
                  value="support@innradii.com"
                />
                <ContactInfoItem
                  icon="fas fa-phone-volume"
                  label="Call No"
                  value="08144447196, 09029198353"
                />
                <ContactInfoItem
                  icon="fab fa-whatsapp"
                  label="WhatsApp Line"
                  value="09029198353"
                />                
              </div>
            </div>
            <div className="column">
              <FacebookPageClient />
            </div>
          </div>
        </div>
      </div>
      <div className='footer-attribution'>
        <div className="content">
          <span className='year'>&copy; Twenty Twenty Six</span>
          <span>Let's build the future, together</span>
        </div>
      </div>
    </div>
  )
}

export default Footer