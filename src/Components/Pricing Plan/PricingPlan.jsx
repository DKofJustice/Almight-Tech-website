import React from 'react';
import Checkmark from './../../Assets/check_FILL0_wght400_GRAD0_opsz48 1.svg';

export default function PricingPlan({ title, price }) {
  return (
    <div className='pricing-plan'>
      <div className='plan-name'><h2>{title}</h2></div>
      <div className='price-and-features'>
        <h3>{price}</h3>

        <ul>
          <li>
            <img src={Checkmark} alt="checkmark" />
            <p>Unlimited access to allmighttech.com and the app</p>
          </li>

          <li>
            <img src={Checkmark} alt="checkmark" />
            <p>Unlimited access to allmighttech.com and the app</p>
          </li>

          <li>
            <img src={Checkmark} alt="checkmark" />
            <p>Unlimited access to allmighttech.com and the app</p>
          </li>

          <li>
            <img src={Checkmark} alt="checkmark" />
            <p>Unlimited access to allmighttech.com and the app</p>
          </li>
        </ul>

        <button className='apply-btn'>Apply</button>
      </div>
    </div>
  )
}
