import React from 'react';
import ImageSlide1 from './../Assets/featuresImageSlide1.png';
import ImageSlide2 from './../Assets/featuresImageSlide2.jpg';
import ImageSlide3 from './../Assets/featuresImageSlide3.jpg';
import ImageSlide4 from './../Assets/featuresImageSlide4.jpg';
import ImageSlide5 from './../Assets/featuresImageSlide5.jpg';
import LeftArrow from './../Assets/arrow_circle_left_FILL0_wght400_GRAD0_opsz48 1.svg';

export default function Features() {

  const imageSlides = [
    { url: ImageSlide1, title: 'Computer' },
    { url: ImageSlide2, title: 'Computer' },
    { url: ImageSlide3, title: 'Computer' },
    { url: ImageSlide4, title: 'Computer' },
    { url: ImageSlide5, title: 'Computer' },
  ];
  console.log(imageSlides);


  return (
    <section className='features'>
        <div className='features-left'>
          <img src={imageSlides[0].url} alt="slides" />
        </div>

        <div className='features-right'>
           <div className='features-text'>

           <img src="" alt="" />
           <h2>Responsible Development</h2>
           <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>

           </div>

           <div className='features-nav'>
            <div className='arrow-left'><img src={LeftArrow} alt="left-arrow" /></div>

            <div className='features-pages'>
                <div className='page-slides slide-1'></div>
                <div className='page-slides slide-2'></div>
                <div className='page-slides slide-3'></div>
                <div className='page-slides slide-4'></div>
            </div>

            <div className='arrow-right'><img src="" alt="" /></div>
           </div>
        </div>
    </section>
  )
}
