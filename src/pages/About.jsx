import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Location from '../components/Location';
import Footer from '../components/Footer';
import LearnCard from '../components/LearnCard'
import liveEducationImage from '../assets/live_education.jpg';
import './About.css'
const About = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
      }
    ).fromTo(
      subheadingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out'
      },
      '<.8'
    ).fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.3
      },
      '<.8'
    );
  }, []);

  return (
    <div data-scroll-section>
      <div className="h-screen bg-gray-100 w-full flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-no-repeat relative">
        <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl text-center ">
          The 
        </h1>
        <h2 ref={subheadingRef} className="text-4xl md:text-5xl lg:text-6xl mt-8 ">
         Easy Trading
        </h2>
      </div>
      <div className="relative z-5  translate-y-[-100px] md:translate-[120px] p-4">
        <div ref={cardsRef} className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LearnCard
              src="https://sithcomputers.com/wp-content/uploads/2023/03/Data-Science.gif"
              desc="Once you are with us, we will be with you. Be a part of our thriving stock market learning private community"
              head="Vision"
            />
            <LearnCard
              src="https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif"
              desc="Our Mission is to provide expert financial education and innovative solutions that empower our students to secure their financial future"
              head="Mission"
            />
          </div>
        </div>
      </div>
      <div className="h-full w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12">
  <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Mentors</h1>
  <div className="flex flex-col lg:flex-row gap-8 mx-auto px-4">
    <div className="mentor-section bg-white p-4 flex flex-col items-center rounded-lg shadow-lg max-w-md w-full">
      <div className="mentor-image w-full flex justify-center mb-4">
        <img
          src={liveEducationImage}
          alt="Mentor"
          className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-cover"
        />
      </div>
      <div className="mentor-info text-gray-900 w-full text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">SIDDHANT AHIRE</h2>
        <h3 className="text-md sm:text-lg mb-4">Trainer & Trader</h3>
        <p className="mb-4 text-sm sm:text-base">
          With 5 years of experience in teaching, mentored more than 800+ students and provided an excellent path to financial freedom through developed market structures.
        </p>
      </div>
    </div>

    <div className="mentor-section bg-white p-4 flex flex-col items-center rounded-lg shadow-lg max-w-md w-full">
      <div className="mentor-image w-full flex justify-center mb-4">
        <img
          src="https://via.placeholder.com/300"
          alt="Mentor"
          className="rounded-full shadow-lg w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-cover"
        />
      </div>
      <div className="mentor-info text-gray-900 w-full text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">SAHIL KUMAR</h2>
        <h3 className="text-md sm:text-lg mb-4">Economist, Full-Time Trader & Investor</h3>
        <p className="mb-4 text-sm sm:text-base">
          With 8 years of experience in the market and a master's in economics, I have developed solutions for financial difficulties. Now, I share this experience to help you excel.
        </p>
      </div>
    </div>
  </div>
</div>

      <Location />
      <Footer />
    </div>
  );
};

export default About;
