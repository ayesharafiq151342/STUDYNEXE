import React from 'react';

import about2 from './images/about us 4.jpg'
import about3 from './images/aboutus-23.jpg'
import bgimage from './images/page-title.jpg'
// Use your image path
import image1 from './images/process-1-263x263.jpg'; // Replace with your images
import image2 from './images/process-2-263x263.jpg';
import image3 from './images/process-3-263x263.jpg';
import image4 from './images/h5-1.svg'
import image5 from './images/h5-2.svg'
import image6 from './images/h5-3.svg'
import image7 from './images/h5-4.svg'
import ContactSection from './footor'


const MissionAboutUs = () => {
  const features = [
    {
      id: 1,
      title: "Learn with Experts",
      icon: image4, // Path to your image
    },
    {
      id: 2,
      title: "Learn Anything",
      icon: image5, // Path to another image
    },
    {
      id: 3,
      title: "Flexible Learning",
      icon: image6, // Path to another image
    },
    {
      id: 3,
      title: "Industrial Standart",
      icon: image7, // Path to another image
    },
  ];

  return (<>

<div
  className="relative w-full h-96 bg-cover bg-center flex items-center justify-start pl-4 md:pl-8 lg:pl-16" // Adjusted padding for responsiveness
  style={{ backgroundImage: `url(${bgimage})` }} // Correct syntax for backgroundImage
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-purple-900 opacity-80"></div>

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
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ABOUT <span className='text-purple-700' >US</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Team StudyNex believes “every student matters.” This promise drives us in our goal to help you achieve your dreams. We are spread all over Pakistan with our vast network of branches and a dedicated team of counselors who ensure that you have access to the best quality education consultancy. We cater to every study destination on the map, and our panel boasts a wide range of top-tier foreign universities. Our impeccable track record has helped students attend their dream universities.

          </p>
        </div>

        {/* Right Image Section */}
        <div>
          <img
            src={about3}
            alt="StudyNex mission"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Our History Section */}
      <div className="max-w-7xl mx-auto mt-48 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Image Section */}
        <div>
          <img
            src={about2}
            alt="StudyNex history"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            StudyNex <span className='text-purple-700' >Vision:</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500">


            "At StudyNex, our vision is to empower students to reach their full potential by providing unparalleled access to global education opportunities. We strive to open doors to premier foreign institutions, guiding students to careers that match their passions and strengths, ultimately shaping a future where every student's aspirations are realized."    </p>
        </div>
      </div>
    </div><div className="container mx-auto px-4 py-12">
      {/* Grid layout with 2 columns */}

    </div> 
   
    <div className="container mx-auto px-4 py-20">

{/* Header Section */}
<div className="text-center">

  <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-20 text-black animate-slideIn'>
     How we do our visa <span className='text-purple-700'>& Immigration processing</span>
    </h1>
</div>

{/* Card Section */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-15">

  {/* IELTS Preparation Card */}
  <div className="text-center">
    <div className="relative mx-auto w-40 h-40">
      <img src={image1} alt="IELTS Preparation" className="rounded-full object-cover w-full h-full shadow-lg" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 w-8 h-8 rounded-full shadow-md"></div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-4">IELTS Preparation and Scoring</h3>
    <p className="text-gray-600 mt-2">
      We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.
    </p>
  </div>

  {/* Applying for International Universities Card */}
  <div className="text-center">
    <div className="relative mx-auto w-40 h-40">
      <img src={image2} alt="International University Application" className="rounded-full object-cover w-full h-full shadow-lg" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 w-8 h-8 rounded-full shadow-md"></div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-4">Applying For International Universities</h3>
    <p className="text-gray-600 mt-2">
      We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.
    </p>
  </div>

  {/* Visa Submission Card */}
  <div className="text-center">
    <div className="relative mx-auto w-40 h-40">
      <img src={image3} alt="Visa Submission" className="rounded-full object-cover w-full h-full shadow-lg" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-red-500 w-8 h-8 rounded-full shadow-md"></div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-4">Assessment & Visa Submission</h3>
    <p className="text-gray-600 mt-2">
      We have years of experience and a team of experts in IT services who are dedicated to providing you with top-notch service.
    </p>
  </div>

</div>
</div>
<ContactSection/>
   </>
  );
};

export default MissionAboutUs;
