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
import uae from './images/uaetes.svg.png';
import ausvg from './images/au.svg';
import can from './images/ca.svg'
import ceo from './images/ceo.jfif'
import Director from './images/director.jfif'
import ContactSection from './footor'; // Ensure ContactSection is exported as default
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image15,
  image16,
];

const LogoSlider = () => {
  return (
<>
<h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-20 text-black animate-slideIn'>
  Study Abroad <span className='text-purple-700'>Consultants</span>
</h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
  {/* United Kingdom */}
  <div className="bg-white border border-purple-700 shadow-md p-6 rounded-lg text-center">
    <img src={gb} alt="United Kingdom" className="w-full h-40 object-cover mx-auto mb-4 rounded-[35px]" />
    <h3 className="text-lg font-semibold">United Kingdom</h3>
    <p className="text-gray-600 mt-2">The United Kingdom remains a premier destination for international students, hosting over 500,000+ students. Renowned for dynamic courses and integrated learning systems, the UK offers a rich educational experience.</p>
    <a href="#" className="text-purple-700 hover:text-purple-900 mt-4 inline-block">Learn More &rarr;</a>
  </div>

  {/* United States */}
  <div className="bg-white border border-purple-700 shadow-md p-6 rounded-lg text-center">
    <img src={usvg} alt="United States" className="w-full h-40 object-cover mx-auto mb-4 rounded-[35px]" />
    <h3 className="text-lg font-semibold">United States</h3>
    <p className="text-gray-600 mt-2">The United States is known for its world-renowned universities, top-ranking institutions like MIT and diverse culture. The country's 4,000 accredited centers, including Ivy League and Harvard, make it a prime choice.</p>
    <a href="#" className="text-purple-700 hover:text-purple-900 mt-4 inline-block">Learn More &rarr;</a>
  </div>

  {/* Australia */}
  <div className="bg-white border border-purple-700 shadow-md p-6 rounded-lg text-center">
    <img src={ausvg} alt="Australia" className="w-full h-40 object-cover mx-auto mb-4 rounded-[35px]" />
    <h3 className="text-lg font-semibold">Australia</h3>
    <p className="text-gray-600 mt-2">Australia, ranked as the 12th happiest country in the world (Prosperity Index), and has 37 top universities and out of those 37, six of them are in the prestigious top 100. This adds to its popularity as a favored study-abroad destination.</p>
    <a href="#" className="text-purple-700 hover:text-purple-900 mt-4 inline-block">Learn More &rarr;</a>
  </div>

  {/* Canada */}
  <div className="bg-white border border-purple-700 shadow-md p-6 rounded-lg text-center">
    <img src={can} alt="Canada" className="w-full h-40 object-cover mx-auto mb-4 rounded-[35px]" />
    <h3 className="text-lg font-semibold">Canada</h3>
    <p className="text-gray-600 mt-2">Canada, is another top choice for global students, offers excellent education, high standard living, and working opportunities. Notably, three Canadian cities—Toronto, Vancouver, and Montreal—feature in the top 20 Best Student Cities.</p>
    <a href="#" className="text-purple-700 hover:text-purple-900 mt-4 inline-block">Learn More &rarr;</a>
  </div>

  {/* United Arab Emirates */}
  <div className="bg-white border border-purple-700 shadow-md p-6 rounded-lg text-center">
    <img src={uae} alt="United Arab Emirates" className="w-full h-40 object-cover mx-auto mb-4 rounded-[35px]" />
    <h3 className="text-lg font-semibold">United Arab Emirates</h3>
    <p className="text-gray-600 mt-2">The UAE offers world-class education with advanced facilities, attracting students globally. Its universities provide diverse cultural experiences. Study in a dynamic, innovative environment.State-of-the-art facilities, and multicultural experiences.</p>
    <a href="#" className="text-purple-700 hover:text-purple-900 mt-4 inline-block">Learn More &rarr;</a>
  </div>
</div>



   
      <div> 
      <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-20 text-black animate-slideIn '>Our Partner <span className=' text-purple-700'>Universities</span> </h1></div>
      <div className="slider ">
        <div className="slide-track mt-20">
          {/* Duplicate slides for seamless looping */}
          {Array.from({ length: 14 }).map((_, index) => (
            <div className="slide" key={index}>
              <img
                src={images[index % images.length]} // Corrected here
                height="100"
                width="250"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div> <div>
        <h1 className='text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-18 text-black animate-slideIn '>Our  <span className=' text-purple-700'>Services</span> </h1>
        <p className='text-center mt-5 '>From applying to a university to securing your study visa, Gohata Global is there for you</p>
      </div>
      <div className=" container  mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 lg:ml-52 lg:mt-20 gap-6">
    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage1} alt="Career Counselling" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Career <br/> Counselling</h3>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage2} alt="Admissions Processing" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Admissions Processing</h3>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage3} alt="Scholarship Applications" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Scholarship Applications</h3>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage4} alt="Interview Preparation" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Interview <br/> Preparation</h3>
    </div>

    <div className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center hover:bg-purple-700 transition-colors duration-300">
      <img src={servicesimage5} alt="Language Preparation" className="w-16 h-16 mb-4"/>
      <h3 className="text-lg font-semibold text-center text-gray-900 hover:text-white">Language Preparation</h3>
    </div>
  </div>
</div>
<div className="flex flex-col items-center my-10">
  <h1 className="text-3xl xl:text-5xl sm:text-2xl text-center mt-20 mb-18 text-black animate-slideIn">
    The Dream <span className="text-purple-700">Team</span>
  </h1>

  {/* CEO Section */}
  <div className="flex flex-col mt-10 md:flex-row items-center mb-12 w-full md:w-3/4">
    <div className="w-46 h-46 md:w-64 md:h-52 mb-46 md:mb-0 md:mr-8">
      <img
        src={ceo}
        alt="CEO"
        className="object-cover rounded-full w-full h-full"
      />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-lg sm:text-xl font-bold">CEO</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">Hamaza</h3>
      <p className="text-sm sm:mx-2  ml-8 mr-8 text-justify">
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
        className="object-cover rounded-full w-full h-full"
      />
    </div>
    <div className="text-center md:text-left">
      <h2 className="text-lg sm:text-xl font-bold">Director</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">Hammad</h3>
      <p className="text-sm sm: mx-2  ml-8 mr-8 text-justify">
        Under the dynamic leadership of Director Hammad, our firm has scaled new
        heights. With over 12 years of experience in the education sector,
        Hammad has played a key role in expanding our reach and impact. His
        efforts have been pivotal to our growth.
      </p>
    </div>
  </div>
</div>

<ContactSection/>
</>

     
      
  );
};





export default LogoSlider;
