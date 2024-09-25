import React from "react";
import bgimage from './images/australia-top-1536x384.webp';
import ContactSection  from "./footor";

const StudyInAUS = () => {
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
          Study in <span className="text-purple-700 "> the Australia?</span> 
        </h2> <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto"/>
        <p className="text-gray-700 text-base mt-6 leading-relaxed">
        Australia is a top destination for Pakistani students seeking higher education abroad, with over 16,000 Pakistani students enrolled in Australian universities in 2021 alone. Pakistani students now make up the ninth-largest source of international students in Australia.Studying in Australia offers Pakistani students many opportunities, including access to top-notch educational institutions, innovative teaching methods, and cutting-edge research facilities. For Pakistani students, tuition fees for undergraduate programs in Australia typically range from AUD 20,000 to AUD 45,000 per year, while postgraduate programs can cost anywhere between AUD 22,000 to AUD 50,000 per year.  </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
        For students wondering how to study in Australia from Pakistan? MR Consultants is your go-to study in Australia consultants from Pakistan. At MR Consultants, we understand that navigating the study abroad process can be overwhelming. That’s why we took the time to compile detailed resources to study in Australia from Pakistan. Costs associated with schooling and living will be discussed in depth, including but not limited to tuition and fees, visa applications, scholarships, and living expenses. Our experts will also guide you on Australia’s educational system, cultural standards, and student life in various Australian cities.     </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
        From choosing the right school and program to assisting with pre-departure preparations, our seasoned advisers are ready to help you at every step. Still confused about how to apply for study in Australia from Pakistan? Contact MR Consultants and let our expert consultants guide you through studying abroad.
        </p>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          From deciding on a suitable school and program to laying the groundwork for a study visa in the Australia from Pakistan, our expert advisors are here to help you every step of the way. Are you ready to begin your study abroad adventure in the United Kingdom? Contact us immediately and let MR Consultants assist you with every step of your study in the Australia from Pakistan.
        </p>
      </div>
      <div className="max-w-4xl mx-auto text-center mt-20">
        <h2 className="text-black font-bold text-2xl md:text-3xl">
          Why Choose <span className="text-purple-700 ">Australia?</span> 
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
      </section>  <section
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

export default StudyInAUS;
