import React, { useState, useEffect, useRef } from 'react';
import '../styles/carousel.css'; // Ensure you have this file for styling

const images = [
  { src: 'https://dxminds.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-16.05.02.jpeg', alt: 'Soulpie - Dating App' },
  { src: 'https://dxminds.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-15.04.33.jpeg', alt: 'Kisan Supply - Veggies Delivery App' },
  { src: 'https://dxminds.com/wp-content/uploads/2023/05/WhatsApp-Image-2023-05-15-at-15.15.17.jpeg', alt: 'MechUni - Online Mechanical Services' },
  { src: 'https://dxminds.com/wp-content/uploads/2023/05/0ne800-2.png', alt: 'One800 - Service Platform' },
  { src: 'https://dxminds.com/wp-content/uploads/2022/09/Zuparr-Developed-by-DxMinds-Best-Software-Development-Company.jpg', alt: 'Zuparr - Food Delivery App' },
  { src: 'https://dxminds.com/wp-content/uploads/2022/09/AIO_PORTFOLIO.jpg', alt: 'AIO Games - Fantasy Sports App' }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef(null);
  const itemsPerSlide = 3;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if (currentSlide >= images.length / itemsPerSlide) {
        // Jump to the first slide (infinite loop)
        setTransition(false);
        setCurrentSlide(0);
      } else {
        setTransition(true);
        setCurrentSlide((prevSlide) => prevSlide + 1);
      }
    }, 2000); // Slide duration (4 seconds)

    return () => resetTimeout();
  }, [currentSlide]);

  return (
    <div className="carousel">
      <div
        className="carousel-slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: transition ? 'transform 1s ease' : 'none',
        }}
        onTransitionEnd={() => {
          if (currentSlide === 0) {
            setTransition(true);
          }
        }}
      >
        {[...images, ...images.slice(0, itemsPerSlide)].map((image, index) => (
          <div className="carousel-slide" key={index}>
            <img src={image.src} alt={image.alt} className="carousel-image" />
            <p className="carousel-caption">{image.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
