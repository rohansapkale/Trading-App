import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location-container p-4 sm:p-8 lg:p-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Our Location
      </h1>
      <div className="map-container mt-4 sm:mt-8 lg:mt-12 w-full h-64 sm:h-80 lg:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.6457782294462!2d75.55111792788753!3d21.011629261842314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f024a123b75%3A0xdf2effa178e3a5df!2sShop%20No.66%2C%20Unity%20Chambers%2C%20Ganesh%20Colony%2C%20Jalgaon%2C%20Maharashtra%20425001!5e0!3m2!1sen!2sin!4v1691753403123!5m2!1sen!2sin"
          className="w-full h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
      <div className="address-container text-center mt-4 sm:mt-8 lg:mt-12">
        <p className="text-sm sm:text-base lg:text-lg">
          66, Unity Chamber, Ganesh Colony Road,
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          Jalgaon, Maharashtra
        </p>
        <p className="text-sm sm:text-base lg:text-lg">
          India
        </p>
      </div>
    </div>
  );
};

export default Location;
