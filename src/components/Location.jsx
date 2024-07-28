import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Location.css';

const Location = () => {
  const containerStyle = {
    width: '100%',
    height: '100%',
  };

  const center = {
    lat: 37.7749, // Replace with the latitude of your organization's location
    lng: -122.4194, // Replace with the longitude of your organization's location
  };

  return (
    <div className="location-container p-4 sm:p-8 lg:p-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mt-4 sm:mt-8 lg:mt-12">Our Location</h2>
      <div className="map-container mt-4 sm:mt-8 lg:mt-12">
        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="address-container text-center mt-4 sm:mt-8 lg:mt-12">
        <p className="text-base sm:text-lg lg:text-xl">1234 Market Street</p>
        <p className="text-base sm:text-lg lg:text-xl">San Francisco, CA 94103</p>
        <p className="text-base sm:text-lg lg:text-xl">USA</p>
      </div>
    </div>
  );
};

export default Location;
