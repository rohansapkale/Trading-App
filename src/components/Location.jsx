import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div className="location-container p-4 sm:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mt-4 sm:mt-8 lg:mt-12">Our Location</h2>
      <div className="map-container mt-4 sm:mt-8 lg:mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1678.9665169209112!2d91.78318064929792!3d26.146213975902526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac1e5b0bebb%3A0x4b329e57c9c1ed54!2sAmrit%20Cement%20Limited%20Maitri%20Bari!5e0!3m2!1sen!2sin!4v1691753403123!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
      <div className="address-container text-center mt-4 sm:mt-8 lg:mt-12">
        <p className="text-base sm:text-lg lg:text-xl"> 66, Unity Chamber, Ganesh Colony
        Road,</p>
        <p className="text-base sm:text-lg lg:text-xl">Jalgaon, Maharashtra</p>
        <p className="text-base sm:text-lg lg:text-xl">India</p>
      </div>
    </div>
  );
};

export default Location;
