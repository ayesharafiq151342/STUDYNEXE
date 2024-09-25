import React from "react";
import bgimage from './images/canada-top.webp';
import ContactSection  from "./footor";
const StudyInCanda = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      
      {/* Hero Section */}
      <section className="relative">
        <img
          src={bgimage}
          alt="Statue of Liberty"
          className="w-full h-[400px] object-cover rounded  m-auto"
        />
        <div className="absolute inset-0 "></div>
       
      </section>
      <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
       
        
        <h2 className="text-black font-bold text-3xl md:text-4xl mt-2">
          Study in <span className="text-purple-700 "> the Canada?</span> 
        </h2> <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto"/>
        <p className="text-gray-700 text-base mt-6 leading-relaxed">
          International students may find various excellent educational opportunities in the United Kingdom. For the 2019/2020 school year, the United Kingdom welcomed roughly 37,000 Pakistani students, as the Higher Education Statistics Agency reported. There are many benefits of studying in the Canada from Pakistan. Students who study in the Canada from Pakistan have several opportunities open to them, including access to top-tier educational institutions, exceptional faculty, and state-of-the-art research facilities.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          Undergraduate, master's, and doctoral degrees are offered across various disciplines at Canada universities. Average annual tuition for a British bachelor's degree may range from £13,000 to £26,000, with postgraduate degrees costing from £16,000 to £35,000. In the United Kingdom, the cost of living varies significantly from region to region, with London having one of the highest averages. A student's average cost of living is between £12,000 and £15,000.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          MR Consultants is an excellent resource for Pakistani students interested in learning more about the costs of studying in the Canada. If you need help figuring out how to pay for your education in the United Kingdom, our team of seasoned advisors is here to help.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          From deciding on a suitable school and program to laying the groundwork for a study visa in the Canada from Pakistan, our expert advisors are here to help you every step of the way. Are you ready to begin your study abroad adventure in the United Kingdom? Contact us immediately and let MR Consultants assist you with every step of your study in the Canada from Pakistan.
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-black font-bold text-2xl md:text-3xl">
          Why Choose <span className="text-purple-700 ">Canada?</span> 
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
    backgroundImage: `url(${bgimage})`,
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

export default StudyInCanda;
