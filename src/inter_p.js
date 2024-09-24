// CareerCounseling.js
import React from "react";
import ContactSection from "./footor";
import bgimage from './images/page-title.jpg';
import interviewImage from './images/image_2.jpg (1).webp'; // Update with the correct path if needed
import interviewImage2 from './images/sdas.webp'; // Update with the correct path if needed

const InterviewPreparation = () => {
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
              Interview  <span className='text-purple-700'>Preparation</span>
            </h2>
            <p className="mb-4 text-lg text-gray-600">
              At StudyNex, we equip you with the essential skills and strategies needed to excel in your interviews. Our expert team provides personalized coaching, mock interviews, and feedback to enhance your performance.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Why Choose Us for Admissions?</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Customized mock interview sessions tailored to your field</li>
              <li>In-depth analysis of your strengths and areas for improvement</li>
              <li>Guidance on answering common interview questions effectively</li>
              <li>Support in developing your personal pitch and body language</li>
            </ul>
          </div>

          {/* Right Image Section (Mobile Above Text) */}
          <div className="flex justify-center md:order-2">
            <img
              src={interviewImage}
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
            Our goal is to prepare you thoroughly for your upcoming interviews. We provide actionable insights, conduct comprehensive mock interviews, and offer constructive feedback to ensure you are ready to impress.
            </p>

            <h2 className="text-2xl font-semibold mb-3">Our Admissions Services Include:</h2>
            <ul className="list-disc list-inside mb-4">
            <li>One-on-one coaching sessions to refine your interview skills</li>
              <li>Simulated interviews with real-time feedback</li>
              <li>Strategies for addressing difficult questions</li>
              <li>Post-interview debriefing and follow-up guidance</li>
           </ul>
          </div>

          {/* Left Image Section (Mobile Above Text) */}
          <div className="flex justify-center md:order-1">
            <img
              src={interviewImage2}
              alt="StudyNex Admissions Process"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default InterviewPreparation;
