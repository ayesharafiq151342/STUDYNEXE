import React from 'react';
import bgimage from './images/page-title.jpg';
import ieltsimage from './images/ites.jpg';
import ContactSection from './footor';
const IELTSPage = () => {
  return (<><div
    className="relative w-full h-96 bg-cover bg-center flex items-center justify-start pl-8"
    style={{ backgroundImage: `url(${bgimage})` }}
  >
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-purple-900 opacity-80"></div>

    {/* Mission Content */}
    <div className="relative flex flex-col items-start justify-center h-full z-10">
      <h1 className="text-white text-3xl md:text-4xl font-bold md:ml-52">StudyNex</h1>
      <p className="text-white mt-4 md:ml-52 text-lg max-w-md">
        welcomes you with the promise of competence, integrity, and professionalism, ensuring your stepping stone is in the right direction.
      </p>
    </div>
  </div>
  <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-10 mb-20 text-black animate-slideIn '>IELTS   <span className=' text-purple-700'>Coaching</span> </h1>  <div className="container mx-auto p-8">
      
      {/* IELTS Overview Section */}
      <section className="mb-12 flex flex-col md:flex-row items-center">
  {/* Left Side: Text Content */}
  <div className="md:w-1/2 mb-6 md:mb-0">
    <h2 className="text-2xl font-bold mb-4">IELTS Overview</h2>
    <p className="mb-4 mr-20 text-gray-600 text-justify">
      Despite the momentary allure, StudyNex company helps students focus on their goals and overcome obstacles with personalized coaching and guidance.
    </p>
    <ul className="list-disc pl-5 space-y-2 text-black-600">
      <li>Charms pleasure that cannot foresee the goal clearly.</li>
      <li>The pain itself reveals the true pursuit of success.</li>
      <li>Unless bound by the goal to respond effectively.</li>
      <li>Fail to grasp the goal leads to discomfort.</li>
    </ul>
  </div>
  
  {/* Right Side: Image */}
  <div className="md:w-1/2">
    <img src={ieltsimage }alt="IELTS Overview" className="w-74 h-96 rounded-lg shadow-lg" />
  </div>
</section>

  
      
<section className="mb-12">
  <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Pack</h2>
  <div className="grid grid-cols-1 items-center justify-center md:grid-cols-2 lg:grid-cols-2 gap-6 mx-auto">
  {/* Individual Pack */}
  <div className="bg-white p-6 shadow-lg rounded-lg border border-purple-700 hover:shadow-purple-500 transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-3">Individual</h3>
    <p className="text-gray-600 mb-2">Best Plan for Individual Students</p>
    <ul className="text-gray-600 space-y-2 mb-4">
      <li>Self Paced</li>
      <li>One-on-One Sessions</li>
      <li>Flexible Schedule</li>
      <li>Study Material Included</li>
      <li>Access to Recorded Sessions</li>
    </ul>
    <p className="text-xl font-bold">$75.99</p>
    <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-500">
Contact us
    </button>
  </div>

  {/* Shared Class Pack */}
  <div className="bg-white p-6 shadow-lg rounded-lg border border-purple-700 hover:shadow-purple-500 transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-3">Shared Class</h3>
    <p className="text-gray-600 mb-2">Best Plan for Group Sessions</p>
    <ul className="text-gray-600 space-y-2 mb-4">
      <li>Group Sessions</li>
      <li>Live Interactive Classes</li>
      <li>Recorded Lectures</li>
      <li>Study Material Included</li>
      <li>Discounted Rates for Group</li>
    </ul>
    <p className="text-xl font-bold">$49.99</p>
    <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-purple-500">
Contact us
    </button>
  </div>
</div>

</section>

    </div>
    <ContactSection /></>
  );
};

export default IELTSPage;
