import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FacebookPageClient from '@/components/footer/FacebookPageClient';
import Newsletter from './Newsletter'

function Footer() {
  return (
    <div className="footer" >
      <div className="content">
        <div className='footer-top wrapper-columns wrapper-lv-1'>
          <div className='column'>
            <div className="brand-logo">
              <img src="/images/logo-footer.png" alt="brand-logo" />
            </div>
          </div>
          <div className='column wrapper-columns wrapper-lv-2'>
            <div className='column'>
              <div className="text-black">
                Trusted by businesses to deliver reliable, innovative tech solutions with integrity, professionalism, and a focus on results
              </div>
            </div>
            <div className='column wrapper-columns wrapper-lv-3'>
              <div className='column'>
                <span className='caption'>Quick Links</span>
                <ul className='links'>
                  <li>Read Our Blog</li>
                  <li>Frequently Asked Questions</li>
                  <li>Partner with Us</li>
                  <li>Careers</li>
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
        <div className="footer-center wrapper-columns">
          <Newsletter />
          <div className='wrapper-columns wrapper-lv-2'>
            <div className='column contact-info'>
              <span className="caption">Contact Info</span>
              <ul className=''>
                <li className='contact-item'>
                  <i className="fab fa-whatsapp" aria-hidden="true"></i>
                  <ul>
                    <li className='field-name'>WhatsApp</li>
                    <li className='text-black'>+ (234)0 9029198353</li>
                  </ul>
                </li>
                <li className='contact-item'>
                  <i className="fa fa-phone-alt" aria-hidden="true"></i>
                  <ul>
                    <li className='field-name'>Phone</li>
                    <li className='text-black'>+ (234)0 8144447196</li>
                  </ul>
                </li>
                <li className='contact-item'>
                  <i className="fa fa-envelope-open" aria-hidden="true"></i>
                  <ul>
                    <li className='field-name'>Email Address</li>
                    <li className='text-black'>services@inntek.ng</li>
                  </ul>
                </li>
              </ul>
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