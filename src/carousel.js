import React, { useState, useEffect } from 'react';

// Import local images
import image1 from './images/WhatsApp Image 2024-08-31 at 11.12.45 PM (1).jpeg'; // Update paths accordingly
import image2 from './images/WhatsApp Image 2024-08-31 at 11.12.45 PM.jpeg';
import image3 from './images/WhatsApp Image 2024-08-31 at 11.12.46 PM.jpeg';
import image4 from './images/car-1.jpeg';
import image5 from './images/car-2.jpeg';
import image6 from './images/car-3.jpeg';
const Carousel = () => {
  // Array of local image imports
  const images = [image1, image2, image3,image4,image5,image6];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Right side - Image with Purple Overlay */}
      <div className="absolute inset-0">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-400 opacity-50"></div>
      </div>

      {/* Left side - Text with Animation */}
      <div className="relative z-10 flex items-center justify-center w-full h-full p-8 lg:w-1/2">
        <div className="w-full text-center animate-text">
          <h1 className="text-5xl font-bold mb-6 text-white">Your Study Abroad Partner</h1>
          <p className="text-lg text-gray-200 mb-4">
Study nexe welcomes you with the promise of competence, integrity and professionalism and makes sure your steppingstone is in the right direction..
          </p>
          <button className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-md text-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
