import { React, useState } from 'react';
import ImageSlide1 from './../Assets/featuresImageSlide1.png';
import ImageSlide2 from './../Assets/featuresImageSlide2.jpg';
import ImageSlide3 from './../Assets/featuresImageSlide3.jpg';
import ImageSlide4 from './../Assets/featuresImageSlide4.jpg';
import ImageSlide5 from './../Assets/featuresImageSlide5.jpg';
import LeftArrow from './../Assets/arrow_circle_left_FILL0_wght400_GRAD0_opsz48 1.svg';
import RightArrow from './../Assets/arrow_circle_right_FILL0_wght400_GRAD0_opsz48 1.svg';

export default function Features() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSlides = [
    { url: ImageSlide1, title: 'Computer' },
    { url: ImageSlide2, title: 'Computer' },
    { url: ImageSlide3, title: 'Computer' },
    { url: ImageSlide4, title: 'Computer' },
    { url: ImageSlide5, title: 'Computer' },
  ];

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? imageSlides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === imageSlides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }


  return (
    <section className='features'>
        <div className='features-left'>
          <img src={imageSlides[currentIndex].url} alt="slides" />
        </div>

        <div className='features-right'>
           <div className='features-text'>

           <img src="" alt="" />
           <h2>Responsible Development</h2>
           <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>

           </div>

           <div className='features-nav'>
            <div className='arrow-left' onClick={() => goToPrevious()}><img src={LeftArrow} alt="left-arrow" /></div>

            <div className='features-pages'>
                {imageSlides.map((slide, slideIndex) => {
                  return <div 
                    className={`page-slides slide-${slideIndex}`}
                    key={slideIndex}
                    style={{ 
                      backgroundColor: currentIndex === slideIndex ? '#C01EBA' : 'white',
                      transition: '0.2s all ease-in-out'
                    }}
                    onClick={() => goToSlide(slideIndex)}
                  >
                  </div>
                })}
            </div>

            <div className='arrow-right' onClick={() => goToNext()}><img src={RightArrow} alt="right-arrow" /></div>
           </div>
        </div>
    </section>
  )
}
