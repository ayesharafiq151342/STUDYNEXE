// CareerCounseling.js
import React from "react";
import ContactSection from "./footor";
import bgimage from './images/page-title.jpg';
import counsling from './images/cansouling1.jpg';
import counsling2 from './images/caounsling2.jpg';

const Addmissionprocess = () => {
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
      <div className="absolute inset-y-0 right-0 flex items-center pr-4">
  <button className="text-white text-2xl">❮</button>
  <button className="text-white text-2xl ml-2">❯</button>
</div>

<div className="bg-white py-16 mt-28 px-4 sm:px-6 lg:px-8">
  {/* Our Mission Section */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Text Section */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
        Career <span className='text-purple-700'>Counseling</span>
      </h2>
      <p className="mb-4">
        At Studynex, we provide expert guidance through the admissions process to help students identify and pursue the right academic path. Our team offers personalized support and practical advice to ensure you make informed decisions at every step of the process.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Why Choose Us for Admissions?</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Comprehensive evaluation of your academic and career goals</li>
        <li>Help with selecting the best-fit educational institutions</li>
        <li>Guidance on preparing application materials such as essays and recommendations</li>
        <li>Support in meeting application deadlines and organizing necessary documents</li>
      </ul>
    </div>

    {/* Right Image Section */}
    <div>
      <img
        src={counsling}
        alt="StudyNex Admissions Process"
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
        alt="StudyNex Admissions Process"
        className="w-2/3 rounded-lg shadow-lg"
      />
    </div>

    {/* Right Text Section */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl mb-10 font-extrabold text-gray-900 sm:text-4xl">
        Our <span className='text-purple-700'>Goal</span>
      </h2>
      <p className="mb-4">
        Our goal is to streamline the admissions process for you by offering tailored advice, helping you navigate various steps, and providing support as you transition from high school to higher education. We ensure that your application stands out.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Our Admissions Services Include:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Personalized one-on-one consultations to outline the admissions timeline</li>
        <li>Support with building a compelling application portfolio</li>
        <li>Guidance on financial aid and scholarship applications</li>
        <li>Post-application follow-up and interview preparation</li>
      </ul>
    </div>
  </div>
</div>
    
    <ContactSection/>
    </>
  );
};

export default Addmissionprocess;
