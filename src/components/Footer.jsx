import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust the path to your logo image

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="mb-6 md:mb-0 flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="h-16 md:h-24 w-auto" 
              /> {/* Adjust the height and width as needed */}
            </a>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
            <p className="text-gray-400 mb-2">Phone: 8767430413 / 9004810318</p>
            <p className="text-gray-400 mb-2">Email: theeasytraders@gmail.com</p>
            <p className="text-gray-400">Address: 66, Unity Chamber, Ganesh Colony Road, Jalgaon, Maharashtra</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
