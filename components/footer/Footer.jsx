import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FacebookPageClient from '@/components/footer/FacebookPageClient';
import Newsletter from './Newsletter'

function Footer() {
  return (
    <div className="footer" >
      <div className='footer-top'>
        <div className='content'>
          <div className='wrapper-columns'>
            <div className='column'>
              <div className="brand-logo">
                <img src="/images/logo-footer.png" alt="brand-logo"  />
              </div>
              Trusted by businesses to deliver reliable, innovative tech solutions with integrity, professionalism, and a focus on results
            </div>
            <div className='column'>
              <span className='column-title'>Top Services</span>
              <ul>
                <li>Web design and development</li>
                <li>Mobile app development</li>
                <li>Custom application development and Integration</li>
                <li>Computer networking</li>
                <li>CCTV Installations</li>
              </ul>
            </div>
            <div className='column'>
              <span className='column-title' >Our Products</span>
              <ul>
                <li>Stock Management System</li>
                <li>MediRecords</li>
                <li>EduPal</li>
                <li>Ticket Booking Apps</li>
                <li>Network Installations and Maintenance</li>
                <li>Home Automation System</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <div className='footer-bottom'>
        <div className='content'>
          <div className='wrapper-groups'>
            <div className='group'>
              <span className="caption">Contact Info</span>
              <ul className='has-icon'>
                <li><i className="fab fa-whatsapp"></i>+(234) 9029198353</li>
                <li><i className="fa fa-phone-alt"></i> +(234)0 8144447196</li>
                <li><i className="fa fa-envelope-open"></i> services@inntek.ng</li>
              </ul>
            </div>
            <div className='group'>
              <span className="caption">Useful Links</span>
              <ul>
                <li>Read Our Blog</li>
                <li>Frequently Asked Questions</li>
                <li>Partner with Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="group">
              <span className="caption">Like Us on Facebook</span>
              <FacebookPageClient />
            </div>
            <div className='group'>
              <span className="caption">Connect with Us</span>
              <ul className='has-icon'>
                <li><i className="fab fa-twitter"></i> @innTekLTD</li>
                <li><i className="fab fa-instagram"></i> InnTek_connect</li>
                <li><i className="fab fa-linkedin-in"></i> InnTek Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-attribution'>
        <div className='content'>
          <span className='year'>&Copy; Twenty Twenty Five</span>
          <span>Let's build the future, together</span>
        </div>
      </div>
    </div>
  )
}

export default Footer