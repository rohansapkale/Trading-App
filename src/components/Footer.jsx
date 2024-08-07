import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust the path to your logo image

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src={logoImage} 
                alt="Logo" 
                className="h-16 md:h-24 w-auto" 
              /> {/* Adjust the height and width as needed */}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Resources</h2>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Follow us</h2>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Legal</h2>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
