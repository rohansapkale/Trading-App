import React from 'react';
import Footer from '../components/Footer';
import './Mentor.css';

const Mentor = () => {
  return (
    <div data-scroll-section>
      <div className="h-screen w-full flex flex-col bg-zinc-900 items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="mentor-section bg-zinc-900 container mx-auto p-6 flex flex-col lg:flex-row-reverse items-center rounded-lg shadow-lg mb-12">
          <div className="mentor-image w-full lg:w-1/3 flex justify-center lg:justify-end mb-4 lg:mb-0">
            <img
              src="https://via.placeholder.com/300"
              alt="Mentor"
              className="rounded-full shadow-lg w-48 h-48 lg:w-64 lg:h-64 object-cover"
            />
          </div>
          <div className="mentor-info text-white w-full lg:w-2/3 lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">SIDDHANT AHIRE</h2>
            <h3 className="text-xl mb-4">Trainer & Trader</h3>
            <p className="mb-6">
              With 5 years of experience in teaching, mentored more than 800+ students and provided an excellent path to financial freedom through developed market structures.
            </p>
          </div>
        </div>
      </div>
      <div className="h-screen w-full flex flex-col bg-zinc-900 items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="mentor-section bg-zinc-900 container mx-auto p-6 flex flex-col lg:flex-row-reverse items-center rounded-lg shadow-lg">
          <div className="mentor-image w-full lg:w-1/3 flex justify-center lg:justify-end mb-4 lg:mb-0">
            <img
              src="https://via.placeholder.com/300"
              alt="Mentor"
              className="rounded-full shadow-lg w-48 h-48 lg:w-64 lg:h-64 object-cover"
            />
          </div>
          <div className="mentor-info text-white w-full lg:w-2/3 lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-2">SAHIL KUMAR</h2>
            <h3 className="text-xl mb-4">Economist, Full-Time Trader & Investor</h3>
            <p className="mb-6">
              With 8 years of experience in the market and a master's in economics, I have developed solutions for financial difficulties. Now, I share this experience to help you excel.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentor;
