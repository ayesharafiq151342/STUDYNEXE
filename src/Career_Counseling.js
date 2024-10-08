// CareerCounseling.js
import React from "react";
import ContactSection from "./footor";
import bgimage from './images/page-title.jpg';
import counsling from './images/cansouling1.jpg';
import counsling2 from './images/caounsling2.jpg';

const CareerCounseling = () => {
  return (
    <>
      {/* Background Section */}
      <div
  className="relative w-full h-96 bg-cover bg-center flex items-center justify-start pl-4 md:pl-8 lg:pl-16" // Adjusted padding for responsiveness
  style={{ backgroundImage: `url(${bgimage})` }} // Correct syntax for backgroundImage
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-purple-900 opacity-50"></div>

  {/* Mission Content */}
  <div className="relative flex flex-col items-start justify-center h-full z-10">
    <h1 className="text-white  text-start text-3xl md:text-4xl lg:text-5xl font-bold  lg:ml-9"> {/* Responsive text size */}
      StudyNex
    </h1>
    <p className="text-white mt-2 md:mt-4 text-base md:text-lg lg:max-w-md lg:ml-10"> {/* Responsive text size and margin */}
      welcomes you with the promise of competence, integrity, and professionalism, ensuring your steppingstone is in the right direction.
    </p>
  </div>
</div>



     
<div className="bg-white  mt-24 md:mt-28 xl:md-28 px-4 sm:px-6 lg:px-8">
  {/* Our Mission Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Text Section */}
    <div className="flex flex-col justify-center md:order-1">
      <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
      Career  <span className='text-purple-700'>Counseling</span>
      </h2>
      <p className="mb-4 text-lg text-gray-600">
      At Studynex, we provide expert career counseling to help students navigate their future careers. Our experienced counselors offer personalized guidance and actionable advice to ensure that you can achieve your academic and professional goals.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Us for Admissions?</h2>
      <ul className="list-disc list-inside mb-4">
      <li>Expert advice tailored to your needs</li>
              <li>Help in identifying your career goals</li>
              <li>Support in making educational and career decisions</li>
              <li>Access to a network of professionals</li>
           </ul>
    </div>

    {/* Right Image Section (Mobile Above Text) */}
    <div className="flex justify-center md:order-2">
      <img
        src={counsling}
        alt="StudyNex Admissions Process"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </div>

  {/* Our History Section */}
  <div className="max-w-7xl mx-auto mt-24 md:mt-44 xl:md-28 mb-32 grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Right Text Section */}
    <div className="flex flex-col justify-center md:order-2">
      <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
        Our <span className='text-purple-700'>Goal</span>
      </h2>
      <p className="mb-4 text-lg text-gray-600">
      Our goal is to empower students with the tools they need to succeed in their chosen career paths. With our services, you will gain insights into different career options, get help with application processes, and receive ongoing support throughout your journey.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Our Admissions Services Include:</h2>
      <ul className="list-disc list-inside mb-4">
      <li>One-on-one counseling sessions</li>
              <li>Resume building and interview preparation</li>
              <li>Access to career exploration tools</li>
              <li>Guidance on educational programs and scholarships</li>
          </ul>
    </div>

    {/* Left Image Section (Mobile Above Text) */}
    <div className="flex justify-center md:order-1">
      <img
        src={counsling2}
        alt="StudyNex Admissions Process"
        className="w-full max-w-md rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>


    <ContactSection/>
    </>
  );
};

export default CareerCounseling;
