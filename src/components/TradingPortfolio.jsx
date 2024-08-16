import React from 'react';
import TradingImg1 from '../assets/Trading Img1.jpeg';
import TradingImg3 from '../assets/Trading Img2.jpeg';
import TradingImg2 from '../assets/Trading Img3.jpeg';
import TradingImg4 from '../assets/Trading Img4.jpeg';
import TradingImg5 from '../assets/Trading Img5.jpeg';
import TradingImg6 from '../assets/Trading Img6.jpeg';
import './TradingPortfolio.css';

function TradingPortfolio() {
  const images = [
    TradingImg1,
    TradingImg2,
    TradingImg3,
    TradingImg4,
    TradingImg5, 
    TradingImg6,
  ];

  return (
    <div className="trading-portfolio-container p-4 sm:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Trading Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {images.map((image, index) => (
          <div key={index} className="image-container relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Trading Img ${index + 1}`}
              className="w-full h-[75vh] object-cover transform transition-transform duration-300 ease-in-out hover:scale-105 hover:blur-sm"
            />
            <div className="overlay-text absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-lg font-medium translate-y-full transition-all duration-500 ease-in-out">
              Trading Image {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradingPortfolio;
