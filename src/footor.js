import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const ContactSection = () => {
  return (
    <section className="bg-purple-700 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Flex container for the left (icons) and right (cards) */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          
          {/* Left: Social Icons */}
          <div className="text-center md:text-left mb-6 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="mb-6 text-gray-300">
              StudyNex welcomes you with the promise of competence, integrity, and professionalism, ensuring your stepping stone is in the right direction.
            </p>
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/studynex.pk?igsh=MTYzNDRjY2Uyd3YxeQ%3D%3D" className="bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition duration-200">
                <i className="fab fa-instagram"></i>
              </a>
              
              <a href="https://www.facebook.com/StudyNexConsultants?mibextid=ZbWKwL" className="bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition duration-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a 
  href="mailto:hamza.sadiq@studynex.co" // Replace with your email address
  className="bg-purple-500 p-2 rounded-full hover:bg-purple-600 transition duration-200"
>
  <i className="fas fa-envelope"></i> {/* Font Awesome envelope icon for email */}
</a>

            </div>
          </div>
    
          {/* Right: Contact Cards */}
          <div className="flex flex-col md:flex-row md:w-1/2 space-y-4 md:space-y-0 md:space-x-8">
            {/* Dribbble */}
            <div className="bg-purple-900 p-6 rounded-lg shadow-lg flex items-center md:w-1/2">
              <i className="fab fa-dribbble text-2xl text-white"></i>
              <p className="ml-4">Studynexconsultancy@gmail.com</p>
            </div>
            {/* Email */}
            <div className="bg-purple-900 p-6 rounded-lg shadow-lg flex items-center md:w-1/2">
              <i className="fas fa-envelope text-2xl text-white"></i>
              <p className="ml-4 text-sm">+92 339 4024867</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
