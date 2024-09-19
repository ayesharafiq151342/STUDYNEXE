// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png'; // Adjust path if needed
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-[100px] w-[100px]" />
          </div>

          {/* Right side - Nav links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              About Us
            </Link>
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </Link>
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Country
            </Link> <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
            </Link>
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
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
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
           <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Courses
            </Link>
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Country
            </Link> <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Blogs
            </Link>
            <Link
              to="#"
              className="text-black hover:bg-purple-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
