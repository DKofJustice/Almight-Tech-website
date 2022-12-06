import React from 'react';
import LandingBackground from './../Assets/crystal-shapes-abstract-dg-1920x1080 1.jpg';
import WatchIcon from './../Assets/play_circle_FILL0_wght400_GRAD0_opsz48 1.svg';
import LandingSectionIllustration from './../Assets/LandingSectionIllustration.svg';

export default function LandingSection() {
  return (
    <section className='landing-section'>
       <div className='landing-background'><img src={LandingBackground} 
       alt="landing-section-background" draggable="false" />
       </div>

       <img  className='landing-illustration' src={LandingSectionIllustration} alt="landing-section-illustration" />

       <div className='landing-content'>
        <h1>Leading innovation with passion</h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>

        <div className='call-to-action'>
            <img src={WatchIcon} alt="watch-icon" />
            <h3>Watch Video</h3>
        </div>
       </div>
    </section>
  )
}
