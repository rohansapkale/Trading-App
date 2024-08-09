import React from 'react';

const CardSlide = ({ imageSrc, heading, description, details, time, duration, fee, buttonText, buttonLink, colorClass }) => (
  <div className={`flex flex-col md:flex-row ${colorClass} my-8 p-4 rounded-lg shadow-lg`}>
    <div className="md:w-1/2 mb-4 md:mb-0">
      <img
        src={imageSrc}
        loading="lazy"
        className="w-full h-auto object-cover rounded-lg"
        alt={heading}
      />
    </div>
    <div className="md:w-1/2 flex flex-col justify-center p-4">
      <h2 className="text-2xl font-bold mb-2">{heading}</h2>
      <p className="mb-2">{description}</p>
      {details && <p className="mb-2">{details}</p>}
      {time && <p className="mb-2"><strong>Time:</strong> {time}</p>}
      {duration && <p className="mb-2"><strong>Duration:</strong> {duration}</p>}
      {fee && <p className="mb-2 font-semibold"><strong>Fee:</strong> {fee}</p>}
      <a href={buttonLink} className={`mt-4 inline-block px-6 py-3 text-white font-semibold rounded-lg ${colorClass} hover:bg-opacity-80 transition duration-300`}>
        {buttonText} →
      </a>
    </div>
  </div>
);

export default CardSlide;
