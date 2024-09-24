import React from "react";
import bgimage from './images/canada-top.webp';
import ContactSection  from "./footor";
import botm from './images/ca-bottom.webp'
const StudyInc = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      
      {/* Hero Section */}
      <section className="relative">
        <img
          src={bgimage}
          alt="Statue of Liberty"
          className=" h-[400px] object-cover rounded  m-auto"
        />
        <div className="absolute inset-0 "></div>
       
      </section>
      <div className="bg-white py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
       
        
        <h2 className="text-black font-bold text-3xl md:text-4xl mt-2">
          Study in <span className="text-purple-700 "> the Canada?</span> 
        </h2> <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto"/>
        <p className="text-gray-700 text-base mt-6 leading-relaxed">
        
Canada offers a high quality of life with access to world-class healthcare and outdoor recreational activities Canada is a great option for Pakistani students interested in gaining a degree, making friendships, or exploring new cultures and experiences’ Many students apply to study in Canada from Pakistan. The Average Cost of University Tuition for  Undergraduate courses is around $36,100 per year while Graduate tuition averages $21,100 per year.         </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
        At M.R. Consultants we specialize in advising and supporting students throughout the study abroad process. Our comprehensive resources cover all aspects of studying in Australia, including payment and visa processes, scholarships, and living expenses. We’ll even provide insight into the Canadian education system, cultural norms, and student life in various cities. Make the transition to studying in Canada a smooth one with MR Consultants.    </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          MR Consultants is an excellent resource for Pakistani students interested in learning more about the costs of studying in the Canada. If you need help figuring out how to pay for your education in the United Kingdom, our team of seasoned advisors is here to help.
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

export default StudyInc;
