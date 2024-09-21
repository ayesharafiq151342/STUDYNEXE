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
        className="relative w-full h-96 bg-cover bg-center flex items-center justify-start pl-8"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-purple-900 opacity-80"></div>

        {/* Mission Content */}
        <div className="relative flex flex-col items-start justify-center h-full z-10">
          <h1 className="text-white text-3xl md:text-4xl font-bold md:ml-52">StudyNex</h1>
          <p className="text-white mt-4 md:ml-52 text-lg max-w-md">
            Welcomes you with the promise of competence, integrity, and professionalism, ensuring your stepping stone is in the right direction.
          </p>
        </div>
      </div>

      
    {/* Carousel Controls */}
    <div className="absolute inset-y-0 right-0 flex items-center pr-4">
      <button className="text-white text-2xl">❮</button>
      <button className="text-white text-2xl ml-2">❯</button>
    </div>
    <div className="bg-white py-16 mt-28  px-4 sm:px-6 lg:px-8">
      {/* Our Mission Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
          Career <span className='text-purple-700 ' >Counseling</span>
          </h2>
          <p className="mb-4 ">
              At Studynex, we provide expert career counseling to help students navigate their future careers. Our experienced counselors offer personalized guidance and actionable advice to ensure that you can achieve your academic and professional goals.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Expert advice tailored to your needs</li>
              <li>Help in identifying your career goals</li>
              <li>Support in making educational and career decisions</li>
              <li>Access to a network of professionals</li>
            </ul>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={counsling}
            alt="StudyNex mission"
            className="w-2/3 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our History Section */}
      <div className="max-w-7xl mx-auto mt-48 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div>
          <img
            src={counsling2}
            alt="StudyNex history"
            className="w-2/3 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
            Our <span className='text-purple-700' >Goal</span>
          </h2>
          <p className="mb-4">
              Our goal is to empower students with the tools they need to succeed in their chosen career paths. With our services, you will gain insights into different career options, get help with application processes, and receive ongoing support throughout your journey.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Our Services Include:</h2>
            <ul className="list-disc list-inside mb-4">
              <li>One-on-one counseling sessions</li>
              <li>Resume building and interview preparation</li>
              <li>Access to career exploration tools</li>
              <li>Guidance on educational programs and scholarships</li>
            </ul>      </div>
      </div>
    </div>
    
    <ContactSection/>
    </>
  );
};

export default CareerCounseling;
