import React, { useState, useEffect } from 'react';

// Import local images
import image1 from './images/WhatsApp Image 2024-08-31 at 11.12.45 PM (1).jpeg'; 
import image2 from './images/WhatsApp Image 2024-08-31 at 11.12.45 PM.jpeg';
import image3 from './images/WhatsApp Image 2024-08-31 at 11.12.46 PM.jpeg';
import image4 from './images/car-1.jpeg';
import image5 from './images/car-2.jpeg';
import image6 from './images/car-3.jpeg';

const Carousel = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-400 opacity-35"></div>
      </div>

      <div className="relative z-10 flex items-center justify-start w-full h-full p-4 lg:p-16">
        <div className="text-start space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Your Study Abroad Partner
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-gray-200">
            Study Nexe welcomes you with the promise of competence, integrity, <br/>professionalism, ensuring your steppingstone is in the right direction.
          </p>
          <a href="./Service.js" className="inline-block">
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-700 hover:bg-purple-500 text-white rounded-lg font-semibold">
   Learn More
        </button> </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
