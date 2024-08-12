import React from 'react';
import { TERipple } from 'tw-elements-react';
import './CourseCard.css'; // Ensure this line is included for custom styles

const CourseCard = ({ title, description, imageUrl, price, time, onButtonClick }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-lg w-full max-w-[200px] sm:max-w-[250px] mx-auto p-4">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-40 md:h-48 rounded-t-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
            src={imageUrl}
            alt={title}
          />
          <a href="#!">
            <div className="absolute inset-0 bg-[hsla(0,0%,98%,0.15)] opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div className="flex flex-col flex-grow">
          <h5 className="text-lg md:text-xl font-medium leading-tight text-black mb-2 truncate">
            {title}
          </h5>
          <p className="text-sm md:text-base text-black flex-grow mb-2">
            {description}
          </p>
          <div className="text-sm md:text-base text-gray-600 mb-2">
            <p><strong>Price:</strong> {price}</p>
            <p><strong>Time:</strong> {time}</p>
          </div>
        </div>
        <TERipple>
          <a
            href="#OurCourse"
            type="button"
            className="relative inline-block rounded px-4 py-2 text-xs md:text-sm font-medium uppercase leading-normal text-black bg-transparent overflow-hidden border border-gray-300 transition duration-300 ease-in-out mt-4"
            onClick={onButtonClick}
          >
            <span className="absolute inset-0 bg-orange-500 transform translate-y-full transition-transform duration-300 ease-in-out"></span>
            <span className="relative">Explore</span>
          </a>
        </TERipple>
      </div>
    </div>
  );
};

export default CourseCard;
