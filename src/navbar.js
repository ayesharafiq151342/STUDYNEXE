import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './images/logo2-removebg-preview.png'; // Adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isActiveCountry = (path) => location.pathname.startsWith(path);

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-[100px] w-[100px]" />
          </div>

          {/* Right side - Nav links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
            >
              Home
            </Link>
            <Link
              to="/m.js"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/m.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
            >
              About Us
            </Link>
            <Link
              to="./Service.js"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('./Service.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
            >
              Services
            </Link>
       

            {/* Country Menu */}
            <div className="relative">
              <button
                onClick={() => setIsCountryOpen(!isCountryOpen)}
                className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Country
              </button>

              {isCountryOpen && (
                <div className="absolute left-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <Link
                    to="/uk.js"
                    className={`block px-4 py-2 text-sm ${isActiveCountry('/uk.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
               United Kingdom
                  </Link>
                  <Link
                    to="/u.js"
                    className={`block px-4 py-2 text-sm ${isActiveCountry('/u.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                United States
                  </Link>
                  <Link
                    to="/Canada.js"
                    className={`block px-4 py-2 text-sm ${isActiveCountry('/Canada.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                   Canada

                  </Link>
                 
                  <Link
                    to="/Australia.js"
                    className={`block px-4 py-2 text-sm ${isActiveCountry('/Australia.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                    Australia

                  </Link>
                  
                  <Link
                    to="/UAE.js"
                    className={`block px-4 py-2 text-sm ${isActiveCountry('/UAE.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                  United Arab Emirates

                  </Link>
                  
                </div>
              )}
            </div>

          
            <Link
              to="/Contact.js"
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/Contact.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-purple-700 text-white inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
              Home
            </Link>
            <Link to="/m.js" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
              About
            </Link>
            <Link to="./Service.js" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
              Services
            </Link>
           
            {/* Mobile Country Menu */}
            <div>
              <button onClick={() => setIsCountryOpen(!isCountryOpen)} className="text-black hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                Country
              </button>
              {isCountryOpen && (
                <div>
                  <Link to="/uk.js" className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveCountry('/uk.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
                    UK
                  </Link>
                  <Link to="/u.js" className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveCountry('/u.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
                    US
                  </Link>
                  <Link
                    to="/Canada.js"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveCountry('/u.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                   Canada

                  </Link>
                     
                  <Link
                    to="/Australia.js"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveCountry('/u.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                    Australia

                  </Link>
                  <Link
                    to="/UAE.js"
                    className={`block px-3 py-2 rounded-md text-base font-medium ${isActiveCountry('/u.js') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}
                  >
                  United Arab Emirates

                  </Link>
                  
                </div>
              )}
            </div>

           
            <Link to="/Contact.js" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-purple-600 text-white' : 'text-black hover:bg-purple-600 hover:text-white'}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
