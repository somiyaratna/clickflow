import React, { useState } from "react";
import logo from '../../assets/logos/clickflowDark.png'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:hidden text-center mt-6" onClick={()=> navigate('/dashboard')}>
          <button className="inline-block bg-[#8A53F8] text-white px-[30px] py-[10px] w-full rounded-[66px] hover:bg-blue-700 transition text-[22px] font-medium">
            Dashboard
          </button>
        </div>
        <div className="flex justify-between h-16 items-center">

          <div className="flex-shrink-0" onClick={()=> navigate('/')}>
            {/* <h1 className="text-xl font-bold text-indigo-600">YourLogo</h1> */}
            <img src={logo} draggable='false' alt="ClickFlow Logo" className="cursor-pointer w-[140px] h-auto sm:w-[160px]"/>
          </div>


          <div className="hidden md:flex space-x-8 items-center">
            <Link to={'/'} className="text-gray-700 hover:text-indigo-600 font-medium">
              Home
            </Link>
            <Link to={'/company'} className="text-gray-700 hover:text-indigo-600 font-medium">
              About
            </Link>
            <Link to={'/contact'} className="text-gray-700 hover:text-indigo-600 font-medium">
              Services
            </Link>
            <Link to={'/dashboard'} className="text-gray-700 hover:text-indigo-600 font-medium">
              <button className="inline-block bg-[#8A53F8] text-white px-[34px] py-[8px] rounded-[66px] hover:bg-blue-700 transition text-[18px] font-normal">
                Dashboard
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              className="text-gray-700 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 shadow-md">
          <Link to={'/'} className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
            Home
          </Link>
          <Link to={'/company'} className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
            About
          </Link>
          <Link to={'/contact'} className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
            Services
          </Link>
          {/* <Link to={'/'} className="block py-2 text-gray-700 hover:text-indigo-600 font-medium">
            <button className="inline-block bg-[#8A53F8] text-white px-[34px] py-[8px] rounded-[66px] hover:bg-blue-700 transition text-[18px] font-normal">
              Dashboard
            </button>
          </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
