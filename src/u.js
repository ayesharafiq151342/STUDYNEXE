import React from "react";
import bgimage from './images/usa-top-1536x384 (1).webp';
import ContactSection  from "./footor";
import botm from './images/us-bottom-1.webp'
const StudyInUS = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      
      {/* Hero Section */}
      <section className="relative">
        <img
          src={bgimage}
          alt="Statue of Liberty"
          className="w-54 h-[400px] object-cover rounded  m-auto"
        />
        <div className="absolute inset-0 "></div>
       
      </section>
      <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
       
        
        <h2 className="text-black font-bold text-3xl md:text-4xl mt-2">
          Study in <span className="text-purple-700 "> the US?</span> 
        </h2> <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto"/>
        <p className="text-gray-700 text-base mt-6 leading-relaxed">
        More and more students from Pakistan have come to the United States in recent years to pursue higher education. In the United States, students may choose from a wide array of undergraduate and graduate programs at prestigious universities. We all want to study in US from Pakistan, right? Over 7,000 Pakistani students, a 5.6% increase from 2019, will study in the United States in 2020, according to the Institute of International Education’s Open Doors Report. Students, who want to study in US from Pakistan, will find that tuition varies widely by region, major, and academic year. The average cost of a year of undergraduate study in the United States is between $20,000 and $50,000, with the cost of a master’s degree ranging from $30,000 to $70,000. Tuition may be more expensive at prestigious schools.In the United States, education costs more than just tuition. Students in Pakistan also need a budget for non-educational costs, including rent, groceries, transportation, and medical care. Costs like this vary widely based on factors including the student’s location and way of life.      </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
        How to study in US from Pakistan is still a significant concern. Need help to find the study in US consultants? No worries! As the number of international students looking to study in the United States rises, MR Consultants is committed to helping Pakistani students find the funding and support they need to move across the globe. We know prospective students from Pakistan want timely and reliable data on the price of higher education in the United States.      </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          MR Consultants is an excellent resource for Pakistani students interested in learning more about the costs of studying in the US. If you need help figuring out how to pay for your education in the United Kingdom, our team of seasoned advisors is here to help.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          From deciding on a suitable school and program to laying the groundwork for a study visa in the US from Pakistan, our expert advisors are here to help you every step of the way. Are you ready to begin your study abroad adventure in the United Kingdom? Contact us immediately and let MR Consultants assist you with every step of your study in the US from Pakistan.
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-black font-bold text-2xl md:text-3xl">
          Why Choose <span className="text-purple-700 ">US?</span> 
        </h2>
        <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto"/>
      </div>
    </div>
      {/* Content Section */}
      <section className="container mx-auto px-4 py-10 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <span className="blockl text-5xl">⭐</span>
            <h3 className="text-xl font-bold mt-4">High Quality Education</h3>
          </div>
          <div className="text-center">
            <span className="block text-5xl">🎓</span>
            <h3 className="text-xl font-bold mt-4">High Standards of Teaching</h3>
          </div>
          <div className="text-center">
            <span className="block 0 text-5xl">🎁</span>
            <h3 className="text-xl font-bold mt-4">Multiple Scholarship Opportunities</h3>
          </div>
          <div className="text-center">
            <span className="block  text-5xl">📚</span>
            <h3 className="text-xl font-bold mt-4">Variety of Courses</h3>
          </div>
        </div>
      </section>
      <section
  className="relative h-[700px] bg-cover bg-center"
  style={{
    backgroundImage: `url(${botm})`,
    backgroundAttachment: 'fixed', // Keeps the image fixed during scroll
    backgroundSize: 'cover', // Ensures the image covers the entire section
    backgroundPosition: 'center', // Centers the background image
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center md:justify-start">
    <div className="text-center md:text-left text-white space-y-4 px-4 md:px-0 md:ml-20">
      <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
        You can achieve your dream.
      </h4>
      <p className="text-sm sm:text-base md:text-lg w-full sm:w-80 md:w-96">
        Book your free consultation and meet with our experts to explore your options.
      </p>
      <a href="./Contact.js" className="inline-block">
        <button className="px-4 py-2 sm:px-6 sm:py-3 bg-purple-700 hover:bg-purple-500 text-white rounded-lg font-semibold">
          Contact Us
        </button>
      </a>
    </div>
  </div>
</section>

      <ContactSection />
  
    </div>

  );
};

export default StudyInUS;
