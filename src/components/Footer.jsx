import React from 'react';
import logoImage from '../assets/logo.png'; // Adjust the path to your logo image

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="mx-auto w-full max-w-screen-xl px-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logoImage} alt="Logo" className="h-[20vh] w-full" /> {/* Adjust the height and width as needed */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Resources</h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#">Flowbite</a>
                </li>
                <li>
                  <a href="#">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Follow us</h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-semibold text-gray-500 uppercase">Legal</h2>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
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
