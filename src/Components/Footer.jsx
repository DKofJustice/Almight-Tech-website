import React from 'react';
import YoutubeIcon from './../Assets/bi_youtube.svg';
import FacebookIcon from './../Assets/gg_facebook.svg';
import TwitterIcon from './../Assets/mdi_twitter.svg';

export default function Footer() {
  return (
    <footer>
        <div className='footer-content'>
            <h3 className='logo-title'>Almight <span>Tech</span></h3>
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

            <ul className='legal'>
                <h3>Legal</h3>
                <li>Terms</li>
                <li>Privacy</li>
            </ul>

            <ul className='social-links'>
                <li><img src={YoutubeIcon} alt="youtube-icon" /></li>
                <li><img src={FacebookIcon} alt="facebook-icon" /></li>
                <li><img src={TwitterIcon} alt="Twitter-icon" /></li>
            </ul>

            <p className='created-by'>Created by Alex Benta</p>
        </div>
    </footer>
  )
}
