// CareerCounseling.js
import React from "react";
import ContactSection from "./footor";
import bgimage from './images/page-title.jpg';
import counsling from './images/sc-app.webp';
import counsling2 from './images/sdas.webp';

const ScholarshipProcess = () => {
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
      Scholarship  <span className='text-purple-700'>Opportunities</span>
      </h2>
      <p className="mb-4 text-lg text-gray-600">
      At StudyNex, we are committed to helping you discover and apply for scholarships that match your academic and career aspirations. Our team provides expert guidance to simplify the scholarship process.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Us for Admissions?</h2>
      <ul className="list-disc list-inside mb-4">
      <li>Thorough evaluation of your academic and financial needs</li>
              <li>Assistance in selecting the right scholarship opportunities</li>
              <li>Guidance on preparing scholarship applications, essays, and recommendations</li>
              <li>Support with deadlines, document organization, and follow-ups</li>
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
      Our goal is to make the scholarship application process smooth and accessible, helping you secure the financial support needed to achieve your educational dreams.
       </p>

      <h2 className="text-2xl font-semibold mb-3">Our Admissions Services Include:</h2>
      <ul className="list-disc list-inside mb-4">
      <li>One-on-one counseling sessions</li>
      <li>One-on-one consultations to match you with the best scholarship options</li>
              <li>Help with crafting strong application materials</li>
              <li>Guidance on scholarship interviews and follow-up strategies</li>
              <li>Assistance with financial aid and grant applications</li>
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

export default ScholarshipProcess;
