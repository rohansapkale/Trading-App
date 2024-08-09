import React from 'react';
import { TERipple } from 'tw-elements-react';
import './CourseCard.css'; // Ensure this line is included for custom styles

const CourseCard = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-lg rounded-lg w-full max-w-sm mx-auto p-4 h-full md:h-[50vh]">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-32 md:h-40 rounded-t-lg">
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
          <h5 className="text-lg md:text-xl font-medium leading-tight text-black dark:text-black mb-2 truncate">
            {title}
          </h5>
          <p className="text-sm md:text-base text-black dark:text-black flex-grow">
            {description}
          </p>
        </div>
        <TERipple>
          <button
            type="button"
            className="relative inline-block rounded px-4 py-2 text-xs md:text-sm font-medium uppercase leading-normal text-black bg-transparent overflow-hidden border border-gray-300 transition duration-300 ease-in-out mt-4"
            onClick={onButtonClick}
          >
            <span className="absolute inset-0 bg-orange-500 transform translate-y-full transition-transform duration-300 ease-in-out"></span>
            <span className="relative">Explore</span>
          </button>
        </TERipple>
      </div>
    </div>
  );
};

export default CourseCard;
