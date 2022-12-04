import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='footer-content'>
            <h3>Almight <span>Tech</span></h3>
            <ul className='site-map'>
                <h3>Site Map</h3>
                <li>Homepage</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>

            <ul className='contact'>
                <h3>Contact</h3>
                <li>Tel: +1 542 456 TEL</li>
                <li>contact@almighttech.com</li>
            </ul>

            <ul className='Legal'>
                <h3>Legal</h3>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>

            <ul className='social-links'>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
                <li><img src="" alt="" /></li>
            </ul>

            <p>Created by Alex Benta</p>
        </div>
    </footer>
  )
}
