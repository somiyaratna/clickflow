import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-indigo-600">YourLogo</h1>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600 font-medium">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu - Optional */}
          <div className="md:hidden">
            <button className="text-gray-700 focus:outline-none">
              {/* Hamburger icon here or mobile menu */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
