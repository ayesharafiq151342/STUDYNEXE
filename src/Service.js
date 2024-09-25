import React from 'react';
import bgimage from './images/page-title.jpg';
import service1 from './images/service1.jpg';
import service2 from './images/visa-2.jpg'; // Fixed typo in image name
import service3 from './images/service6.jpg'; // Fixed variable name
import service4 from './images/service4a.jpg';
import service5 from './images/service3.jpg';
import service6 from './images/service4.jpg';
import ContactSection from './footor'; // Corrected component name

// Array of services with images
const services = [
  {
    title: 'Career Counseling',
    description: 'Studynex company offers expert guidance for students to plan their careers effectively.',
    image: service1,
    link: '/Career_Counseling.js',
  },
  {
    title: 'Admissions Process',
    description: 'Studynex company simplifies the admissions process for students seeking to apply to top institutions.',
    image: service2,
    link: ' /Adm_Pro.js',
  },
  {
    title: 'Scholarship Application',
    description: 'Studynex company helps students find and apply for scholarships to ease the financial burden.',
    image: service3,
    link: '/scholar_app.js',
  },
  {
    title: 'Interview  Preparation',
    description: 'Studynex company provides language training for students to prepare for interviews.',
    image: service4,
    link:'/inter_p.js',
  },
  {
    title: 'IELTS   & PTE Coaching',
    description: 'Studynex company offers IELTS  & PTE Coaching training to help students prepare for various interviews and exams.',
    image: service5,
    link: '/its.js',
  },
  {
    title: 'Visa Application',
    description: 'Studynex company assists students in simplifying the visa application process for studying abroad.',
    image: service6,
    link: '/v_a.js',
  },
];

const ServicesPage = () => {
  return (
    <>
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

      <div className="container mx-auto py-10">
      <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-10 mb-20 text-black animate-slideIn '>Our  <span className=' text-purple-700'>Services</span> </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 h-full w-full rounded-lg shadow-lg">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-96 h-48 md:h-56 object-cover rounded-md mb-4" // Adjust height for responsiveness
              />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <a href={service.link} className="text-purple-700 hover:text-purpke-500">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default ServicesPage;
