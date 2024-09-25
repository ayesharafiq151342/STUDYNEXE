import React from 'react';
import './LogoSlider.css'; // Import CSS file for styling
import image1 from './images/essex-uni.png';
import image2 from './images/coventry-uni.png';
import image3 from './images/chester-uni.png';
import image4 from './images/logo-iamge-1.png';
import image5 from './images/logo-image-2.png';
import image6 from './images/logo-image-3.png';
import image7 from './images/logo-image-4.png';
import image8 from './images/logo-image-5.png';
import image9 from './images/logo-image-6.png';
import image10 from './images/logo-image-7.png';
import image11 from './images/logo-image-8.png';
import image12 from './images/logo-image-9.png';
import image13 from './images/logo-image-10.png';
import image14 from './images/logo-image-11.png';
import image15 from './images/logo-image-12.png';
import image16 from './images/logo-image-13.png';
import servicesimage1 from './images/services logo 1.png';
import servicesimage2 from './images/services logo 2.png';
import servicesimage3 from './images/services logo 3.png';
import servicesimage4 from './images/services logo 5.png';
import servicesimage5 from './images/services logo 4.png';
import gb from './images/gb.svg'
import usvg from './images/us.svg';
import uae from './images/f.webp';
import ausvg from './images/au.svg';
import can from './images/ca.svg'
import ceo from './images/ceoimage.jpeg'
import Director from './images/director.jfif'
import ContactSection from './footor'; // Ensure ContactSection is exported as default
import Carousel from './carousel';
import './card.css'
import Finland  from './images/filand.jpg'

const LogoSlider = () => {
  
  return (
   
<> 

<Carousel/>
<h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-20 text-black animate-slideIn'>
  Study Abroad <span className='text-purple-700'>Consultants</span>
</h1>

   <div className="container">
      <div className="card">
        <img src={gb} alt="UK Flag" />
        <h2>United Kingdom</h2>
        <p>
          The United Kingdom remains a premier destination for international
          students, hosting over 500,000+ students. Renowned for dynamic courses
          and integrated learning systems, the UK offers a rich educational
          experience.
        </p>
        <a href="./uk.js">Learn More →</a>
      </div>

      <div className="card">
        <img src={usvg} alt="US Flag" />
        <h2>United States</h2>
        <p>
          The United States is known for its world-renowned universities,
          top-ranking institutions like MIT and diverse culture. The country's
          4,000 accredited centers, including Ivy League and Harvard, make it a
          prime choice.
        </p>
        <a href="./u.js">Learn More →</a>
      </div>

      <div className="card">
        <img src={can} alt="Canada Flag" />
        <h2>Canada</h2>
        <p>
          Canada is another top choice for global students, offering excellent
          education, high standards, and working opportunities. Three Canadian
          cities feature in the top 20 Best Student Cities.
        </p>
        <a href="./Canada.js">Learn More →</a>
      </div>

      <div className="card">
        <img src={ausvg} className='' alt="Australia Flag" />
        <h2>Australia</h2>
        <p>
          Australia is ranked as the 12th happiest country in the world. It has
          37 top universities and is a favored study-abroad destination.
        </p>
        <a href="./Australia.js">Learn More →</a>
      </div>

      <div className="card">
        <img src={uae} alt="UAE Flag" />
        <h2>United Arab Emirates</h2>
        <p>
          The UAE is a rising educational hub offering state-of-the-art
          infrastructure and renowned universities attracting global students.
        </p>
        <a href="./UAE.js">Learn More →</a>
      </div>

      <div className="card">
        <img src={Finland }alt="Germany Flag" />
        <h2>Finland  </h2>
        <p>
        Finland   offers free or low-cost education for international students,
          making it a top destination for studying abroad, especially in fields
          like engineering.
        </p>
        <a href="./Finland.js">Learn More →</a>
      </div>
    </div>

 <div>
        <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-18 text-black animate-slideIn '>Our  <span className=' text-purple-700'>Services</span> </h1>
        <p className='text-center mt-5 '>From applying to a university to securing your study visa, StudyNex is there for you</p>
      </div>
      <div className="container mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:ml-52 lg:mt-20 gap-6">
    
    {/* Career Counselling */}
    <a href="./Career_Counseling.js" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage1} alt="Career Counselling" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Career <br/> Counselling</h3>
    </a>

    {/* Admissions Processing */}
    <a href="./Adm_Pro.js" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage2} alt="Admissions Processing" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Admissions Processing</h3>
    </a>

    {/* Scholarship Applications */}
    <a href="./scholar_app.js" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage3} alt="Scholarship Applications" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Scholarship Applications</h3>
    </a>

    {/* Interview Preparation */}
    <a href="./inter_p.js" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage4} alt="Interview Preparation" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Interview <br/> Preparation</h3>
    </a>

    {/* Language Preparation */}
    <a href="./its.js" className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage5} alt="Language Preparation" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Language Preparation</h3>
    </a>

  </div>
</div>

<div className="flex flex-col items-center my-10">
  <h1 className="text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-18 text-black animate-slideIn">
    The Dream <span className="text-purple-700">Team</span>
  </h1>

  {/* CEO Section */}
  <div className="flex flex-col mt-10 md:flex-row items-center mb-12 w-full md:w-3/4">
  <div className="w-40 h-40 md:w-64 md:h-52 mb-4 md:mb-0 md:mr-8">
    <img
      src={ceo}
      alt="CEO"
      className="object-cover rounded-full w-full"
    />
  </div>
  <div className="text-center md:text-left">
    <h2 className="text-lg sm:text-xl font-bold">CEO</h2>
    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Hamaza</h3>
    <p className="text-sm sm:text-base  text-justify">
      Our CEO, Hamaza, has been the guiding force behind our firm's success. His vision and leadership have inspired growth and innovation at every step. With his nurturing approach, Hamaza has not only built partnerships but also fostered trust and excellence.
    </p>
  </div>
</div>

{/* Director Section */}
<div className="flex flex-col md:flex-row mt-10 items-center w-full md:w-3/4">
  <div className="w-40 h-40 md:w-64 md:h-52 rounded-full mb-4 md:mb-0 md:mr-8">
    <img
      src={Director}
      alt="Director"
      className="object-cover rounded-full w-96 "
    />
  </div>
  <div className="text-center md:text-left">
    <h2 className="text-lg sm:text-xl font-bold">Director</h2>
    <h3 className="text-xl sm:text-2xl font-semibold mb-2">Hammad</h3>
    <p className="text-sm sm:text-base  text-justify">
      Under the dynamic leadership of Director Hammad, our firm has scaled new heights. With over 12 years of experience in the education sector, Hammad has played a key role in expanding our reach and impact. His efforts have been pivotal to our growth.
    </p>
  </div>
</div>

</div>
<ContactSection />

</>

     
      
  );
};
export default LogoSlider