import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png'; // Adjust path as needed

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Adjust this value as needed
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-8 left-0 w-full h-16 px-4 bg-transparent text-white z-50 flex items-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex justify-between items-center w-full max-w-screen-lg">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logoImage}
            alt="Logo"
            className="h-16 rounded-full object-cover bg-white" // Adjust height as needed
          />
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
