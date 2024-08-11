// LogoHighlight.jsx
import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust path as needed
import './Logo.css';

const LogoHighlight = () => {
  return (
    <div className="fixed top-4 left-4 z-50 flex items-center justify-center">
      <div className="relative w-24 h-24 bg-white rounded-full border-4 border-white shadow-lg overflow-hidden animate-floating">
        <img
          src={logoImage}
          id="LogoImg"
          alt="Logo"
          className="absolute inset-0 object-cover transform transition-transform duration-300 hover:animate-revolve"
        />
      </div>
    </div>
  );
};

export default LogoHighlight;
