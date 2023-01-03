import React from 'react';
import PhoneIcon from './../Assets/ic_baseline-phone-min.png';
import EmailIcon from './../Assets/ic_round-email-min.png';
import SquareMask from './../Assets/Square Mask.png';
import DeskPhone from './../Assets/iPhone Desk Image.png';

export default function ContactForm() {
  return (
    <div className='contact-container'>
        <div className='contact-left'>
            <div className='circle-image-mask'>
              <div className='circle-image'></div>
            </div>

            <div className='contact-left-content'>
              <h2>Contact Us</h2>
              <p>We will reach you back as soon as possible</p>
            </div>

            <form>
              <div>
                <label htmlFor="first-name">First Name</label>
                <input type="text" name="first-name" id="first-name" />
              </div>

              <div>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" name="last-name" id="last-name" />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
              </div>

              <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone" id="phone" />
              </div>

              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" 
                placeholder='Write your message..'></textarea>
              </div>

              <button>Send Message</button>
            </form>
        </div>

        <div className='contact-right'>
          <div className='contact-right-content'>
            <h2>Contact Information</h2>
            <p>You can reach us for any business request with the below contact details</p>

            <ul className='contact-list'>
              <li className='phone-item'>
                <img src={PhoneIcon} alt="phone-icon" />
                <p>+1 542 456 TEL</p>
              </li>

              <li className='email-item'>
                <img src={EmailIcon} alt="email-icon" />
                <p>contact@almighttech.com</p>
              </li>
            </ul>

            <ul className='contact-image-list'>
              <li><img src={SquareMask} alt="square-mask" /></li>
              <li><img src={DeskPhone} alt="desk-phone" /></li>
            </ul>
          </div>
        </div>
    </div>
  )
}
