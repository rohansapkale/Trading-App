import React, { useState, useEffect } from 'react';
import logoImage from '../assets/logo.png'; // Adjust path as needed
import './Logo.css';

const LogoHighlight = () => {
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 50) { // Change 50 to the scroll position you prefer
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
    <div className={`fixed top-4 left-4 z-30 flex items-center justify-center transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-[50vw]">
        <img
          src={logoImage}
          id="LogoImg"
          alt="Logo"
          className="absolute inset-0 object-cover ml-3 rounded-full border-4 bg-white transform transition-transform duration-300 hover:animate-revolve"
        />
      </div>
    </div>
  );
};

export default LogoHighlight;
