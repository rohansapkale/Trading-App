import React from 'react';
import TradingImg1 from '../assets/Trading Img1.jpeg';
import TradingImg2 from '../assets/Trading Img2.jpeg';
import TradingImg3 from '../assets/Trading Img3.jpeg';
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
    <div className="trading-portfolio-container p-4 sm:p-8 lg:p-12 overflow-hidden">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Student Portfolio
      </h1>
      <div className="carousel flex">
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] flex-shrink-0 relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image}
              alt={`Trading Img ${index + 1}`}
              className="w-full mt-5 h-[50vh] md:h-[60vh] lg:h-[75vh] object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 "
            />
            <div className="overlay-text absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2 text-lg font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              Trading Image {index % images.length + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TradingPortfolio;
