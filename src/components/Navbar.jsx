import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LogoHighlight from './LogoHighlight';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-8  text-lg left-0 w-full h-16 px-4 bg-transparent text-white z-50 flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        {/* Logo */}
        <div>
          <LogoHighlight />
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="block md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent md:items-center transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <li className="md:ml-6 p-4 md:p-0">
            <Link to="/">Home</Link>
          </li>
          <li className="md:ml-6 p-4 md:p-0">
            <Link to="/about">About Us</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
