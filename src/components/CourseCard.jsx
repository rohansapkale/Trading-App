import React from 'react';
import { TERipple } from 'tw-elements-react';
import './CourseCard.css'; // Ensure this line is included for custom styles

const CourseCard = ({ title, description, imageUrl, onButtonClick }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 shadow-lg rounded-lg max-w-xs mx-auto p-4">
      <TERipple>
        <div className="relative overflow-hidden bg-cover bg-no-repeat w-full h-48">
          <img
            className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
            src={imageUrl}
            alt={title}
          />
          <a href="#!">
            <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
          </a>
        </div>
      </TERipple>
      <div className="p-4 text-center">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <TERipple>
          <button
            type="button"
            className="relative inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black bg-transparent overflow-hidden border border-gray-300 transition duration-300 ease-in-out"
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
