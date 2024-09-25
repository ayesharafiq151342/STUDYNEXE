import React from "react";
import bgimage from './images/helsinki-skyscape-finland.jpg'; // Update this with a relevant image for Finland
import ContactSection from "./footor";

const Land = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <img
          src={bgimage}
          alt="Beautiful landscape in Finland" // Update alt text to reflect the image content
          className="w-full h-[400px] object-cover rounded m-auto"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for contrast */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Optional content can be placed here */}
          <h1 className="text-white text-3xl font-bold">Discover Finland</h1>
        </div>
      </section>

      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-black font-bold text-3xl md:text-4xl mt-2">
            Study in <span className="text-purple-700">Finland?</span>
          </h2>
          <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto" />
          <p className="text-gray-700 text-base mt-6 leading-relaxed">
            Finland is renowned for its high-quality education system, attracting international students from around the world. With its innovative teaching methods and diverse academic offerings, it provides excellent opportunities for students seeking higher education.
          </p>
          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            Tuition fees in Finland vary, with undergraduate programs typically ranging from €5,000 to €20,000 per year, depending on the institution and program of study.
          </p>
          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            If you're looking to study in Finland, our consultants are here to help you navigate the process. We provide resources on tuition costs, visa applications, and scholarships, ensuring you have all the information you need.
          </p>
          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            From selecting the right university to preparing for your departure, our experienced advisors will guide you every step of the way. Contact us today to start your journey towards studying in Finland.
          </p>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-20">
          <h2 className="text-black font-bold text-2xl md:text-3xl">
            Why Choose <span className="text-purple-700">Finland?</span>
          </h2>
          <hr className="border-t-2 border-purple-700 mt-2 w-1/4 mx-auto" />
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-4 py-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <span className="block text-5xl">⭐</span>
            <h3 className="text-xl font-bold mt-4">World-Class Education</h3>
          </div>
          <div className="text-center">
            <span className="block text-5xl">🎓</span>
            <h3 className="text-xl font-bold mt-4">Innovative Teaching Standards</h3>
          </div>
          <div className="text-center">
            <span className="block text-5xl">🎁</span>
            <h3 className="text-xl font-bold mt-4">Various Scholarship Opportunities</h3>
          </div>
          <div className="text-center">
            <span className="block text-5xl">📚</span>
            <h3 className="text-xl font-bold mt-4">Diverse Range of Programs</h3>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section
        className="relative h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgimage})`, // Use the same or a different relevant image for the background
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

export default Land;
