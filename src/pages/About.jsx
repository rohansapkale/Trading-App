import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Location from '../components/Location';
import Footer from '../components/Footer';
import LearnCard from '../components/LearnCard';
import StudentGrowthChart from '../components/StudentGrowthChart';
import './About.css';

const About = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);

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
    );
  }, []);

  return (
    <div data-scroll-section>
      <div className="h-screen relative w-full flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-no-repeat">
        <h1 ref={headingRef} className="text-3xl flex gap-2 text-white">
          Our Institute
        </h1>
        <h2 ref={subheadingRef} className="text-4xl mt-8 text-white">
          Stock Market Trading
        </h2>
      </div>
      <div className="bg-gray-100 p-4">
  <div className="flex flex-wrap justify-center gap-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div className="bg-[#000000]">
      <StudentGrowthChart />
      </div>    
      <Location />
      <Footer />
    </div>
  );
};

export default About;
