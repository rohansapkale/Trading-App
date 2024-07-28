import React from 'react';

function LearnCard({ src,head,desc}) {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        {/* Conditionally render the src prop */}
        <img className="rounded-t-lg w-80 h-48 object-cover p-8" src={src} alt="Learn Card" />
      </a>
      <div className="text-center">
        <a href="#">
          <h5 className="mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {head}
          </h5>
        </a>
        <p className="mb-2 p-3 font-normal text-gray-700 dark:text-gray-400">
          {desc}
        </p>
        
      </div>
    </div>
  );
}

export default LearnCard;
