import React from 'react';
import Square from './../Assets/squareIllustration.svg';
import Sphere from './../Assets/callToActionEllipse.svg';
import CallToActionImage from './../Assets/maximalfocus-VT4rx775FT4-unsplash 1.jpg';

export default function CallToAction() {
  return (
    <section className='call-to-action'>
        <div className='call-to-action-bkg'>
            <img src={Square} alt="square" />
            <img src={Sphere} alt="sphere" />
        </div>

        <div className='call-to-action-content'>
            <div><img src={CallToActionImage} alt="" /></div>
            <div className='CTA-body'>
                <h2>Experience the future</h2>
                <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                <button type='submit'>Explore</button>
            </div>
        </div>
    </section>
  )
}
