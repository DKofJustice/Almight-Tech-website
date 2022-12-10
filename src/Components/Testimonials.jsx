import React from 'react';
import TestimonialsBackground from './../Assets/christopher-burns-Kj2SaNHG-hg-unsplash 1.png';
import TestimonialImage1 from './../Assets/TestimonialImage1.png';
import TestimonialImage2 from './../Assets/TestimonialImage2.png';
import TestimonialImage3 from './../Assets/TestimonialImage3.png';
import UserReview from './../Components/UserReview';


export default function Testimonials() {

  const testimonials = [
    {image: TestimonialImage1},
    {image: TestimonialImage2},
    {image: TestimonialImage3}
  ];

  return (
    <section className='testimonials'>
        <div className='testimonials-background'><img src={TestimonialsBackground} alt="testimonial-background" /></div>

        <div className='testimonials-content'>
            <h2>Testimonials</h2>

            <div className='testimonials-slider'>
                {testimonials.map(testimonial => {
                  return <UserReview image={testimonial.image} />
                })}
            </div>
        </div>
    </section>
  )
}
