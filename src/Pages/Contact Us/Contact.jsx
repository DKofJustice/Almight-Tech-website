import React from 'react';
import ContactForm from '../../Components/ContactForm';
import CrystalBackground from './../../Assets/crystal-shapes-abstract-dg-1920x1080 1.jpg';

export default function Contact() {
  return (
    <section className='contact-us'>
        <div className='partial-background'><img src={CrystalBackground} alt="crystal-background" /></div>

        <div className='contact-title'>
            <h2>Have some questions?</h2>
            <p>Let us know by using the following contact methods:</p>
        </div>

        <ContactForm/>

    </section>
  )
}
