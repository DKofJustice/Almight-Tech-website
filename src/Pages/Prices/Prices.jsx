import React from 'react';
import PricingPlan from '../../Components/Pricing Plan/PricingPlan';
import CrystalBackground from './../../Assets/crystal-shapes-abstract-dg-1920x1080 1.jpg';
import { pricingPlanData } from '../../Components/Pricing Plan/PricingPlanData';

export default function Prices() {
  return (
    <section className='prices-page'>
      <div className='partial-background'><img src={CrystalBackground} alt="crystal-background" /></div>

      <div className='pricing-section'>
        <div className='pricing-content'>
          <h2 className='pricing-text'>You can choose one of the following plans:</h2>

          <div className='pricing-plans'>
            {pricingPlanData.map(plan => {
              return <PricingPlan 
                title = {plan.title}
                price = {plan.price}
              />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
