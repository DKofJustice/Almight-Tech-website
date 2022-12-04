import React from 'react'
import LandingSection from '../../Components/LandingSection';
import Features from '../../Components/Features';
import Testimonials from '../../Components/Testimonials';
import CallToAction from '../../Components/CallToAction';

export default function Homepage() {
  return (
    <div className='homepage'>
        <LandingSection/>
        <Features/>
        <Testimonials/>
        <CallToAction/>
    </div>
  )
}
