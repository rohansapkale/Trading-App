import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import LogoHighlight from './LogoHighlight';

const Navbar = () => {
  return (
    <nav className="fixed top-8 left-0 w-full h-16 px-4 bg-transparent text-white z-50 flex justify-center items-center">
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        {/* Logo */}
        <div>
          <LogoHighlight />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="p-4">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about">About Us</Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
