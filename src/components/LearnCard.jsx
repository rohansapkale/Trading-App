import React from 'react';

function LearnCard({ src, head, desc }) {
  return (
    <div className="max-w-xs w-full bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 ease-in-out hover:scale-105">
      <a href="#">
        <img
          className="rounded-t-lg w-80 h-48 object-cover p-8"
          src={src}
          alt="Learn Card"
        />
      </a>
      <div className="text-center bg-white">
        <a href="#">
          <h5 className="mb-1 text-xl font-bold tracking-tight text-black">
            {head}
          </h5>
        </a>
        <p className="mb-2 p-3 font-normal text-black">
          {desc}
        </p>
      </div>
    </div>
  );
}

export default LearnCard;
