import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LiveCard = ({ course, index }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const triggerElement = cardRef.current;

    gsap.fromTo(
      triggerElement,
      { opacity: 0, x: index % 2 === 0 ? -200 : 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: triggerElement,
          start: 'top 80%',
          end: 'bottom top',
          scrub: true,
          toggleActions: 'play none none none',
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col md:flex-row ${
        index % 2 === 0 ? 'md:flex-row-reverse' : ''
      } items-center my-8`}
    >
      <div className="md:w-1/2 p-4">
        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
        <p className="mb-2">{course.description}</p>
        {course.time && <p className="mt-2">Time: {course.time}</p>}
        {course.details && <p className="mt-2">{course.details}</p>}
        {course.duration && <p className="mt-2">Duration: {course.duration}</p>}
        <p className="mt-2 font-semibold">Fee: {course.fee}</p>
      </div>
      <div className="md:w-1/2 p-4">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default LiveCard;
