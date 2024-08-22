import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Location from '../components/Location';
import Footer from '../components/Footer';
import LearnCard from '../components/LearnCard'
import StudentGrowthChart from '../components/StudentGrowthChart';
import './About.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoSectionAbout from '../components/VideoSectionAbout';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
gsap.registerPlugin(ScrollTrigger);
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
  const goalRefs = useRef([]);
  goalRefs.current = [];

  useEffect(() => {
    goalRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -300 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
          delay: index * 0.5, // Delay each item to make them appear one by one
        }
      );
    });
  }, []);

  const addToRefs = (el) => {
    if (el && !goalRefs.current.includes(el)) {
      goalRefs.current.push(el);
    }
  };
  return (
    <div data-scroll-section>

      <VideoSectionAbout />
      <div className="relative z-5  translate-y-[-100px] md:translate-[120px] p-4">
        <div ref={cardsRef} className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LearnCard
              src={gif1}
              desc="Once you are with us, we will be with you. Be a part of our thriving stock market learning private community"
              head="Vision"
            />
            <LearnCard
              src={gif2}
              desc="Our Mission is to provide expert financial education and innovative solutions that empower our students to secure their financial future"
              head="Mission"
            />
          </div>
        </div>
      </div>

      {/* <div className="h-full w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat py-12">
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
</div> */}
      <div className="mt-10 md:mt-13">
        <h3 className="text-2xl md:text-3xl text-center font-semibold mb-2">
          Student Growth
        </h3>
        <StudentGrowthChart />
      </div>
      <div className="flex justify-center items-center min-h-screen  py-10">
      <div className=" p-12 w-full max-w-4xl text-center space-y-12">
        <h2 className="text-4xl font-bold mb-10">Our Goals</h2>
        <div ref={addToRefs} className="p-8 bg-gray-50 rounded-lg shadow-lg text-2xl font-medium">
          1. Comprehensive financial plans tailored to your long-term goals.
        </div>
        <div ref={addToRefs} className="p-8 bg-gray-50 rounded-lg shadow-lg text-2xl font-medium">
          2. Management to grow your investments.
        </div>
        <div ref={addToRefs} className="p-8 bg-gray-50 rounded-lg shadow-lg text-2xl font-medium">
          3. Strategies to ensure a secure and comfortable retirement.
        </div>
      </div>
    </div>
      <Location />
      <Footer />
    </div>
  );
};

export default About;
