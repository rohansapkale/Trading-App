import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import LearnCard from '../components/LearnCard';
import StudentGrowthChart from '../components/StudentGrowthChart';
import Testimonial from '../components/Testimonial';
import './Home.css';

const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const countRef = useRef(null);
  const staticCountRef = useRef(null);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    ).fromTo(
      subheadingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '<.8'
    ).fromTo(
      countRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '<.8'
    ).fromTo(
      staticCountRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '<.8'
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prevCount) => {
        if (prevCount < 800) {
          return prevCount + 5; // Adjust increment for faster count
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 50); // Faster interval for quicker animation

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const responseNifty = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:NIFTY&interval=1min&apikey=YOUR_API_KEY`
        );
        const responseSensex = await axios.get(
          `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BSE:SENSEX&interval=1min&apikey=YOUR_API_KEY`
        );

        const niftyData = responseNifty.data['Time Series (1min)'];
        const sensexData = responseSensex.data['Time Series (1min)'];

        const latestNifty = Object.values(niftyData)[0]['4. close'];
        const latestSensex = Object.values(sensexData)[0]['4. close'];

        setNiftyValue(latestNifty);
        setSensexValue(latestSensex);
      } catch (error) {
        console.error('Error fetching market data:', error);
      }
    };

    fetchMarketData();

    const interval = setInterval(() => {
      fetchMarketData();
    }, 1 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div data-scroll-section>
      <div className="relative h-screen w-full flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-no-repeat z-0">
        <h1
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center relative z-10"
        >
          Top Rated Institute For
        </h1>
        <h2
          ref={subheadingRef}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-white text-center relative z-10"
        >
          Stock Market Trading
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="bg-gradient-to-r from-orange-500 to-blue-500  text-white text-center rounded-lg shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Students Enrolled: <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl">{studentCount}+</span>
            </h3>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-blue-500   text-white text-center rounded-lg shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Live Classes: <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl">240+</span>
            </h3>
          </div>
        </div>
      </div>

      <div
        id="OurCourse"
        className="p-4 relative z-1 -top-[18vh] md:-top-[30vh] lg:-top-[30vh]"
      >
        <Courses />
      </div>

      <div className="flex flex-col items-center p-4 bg-white relative -top-[15vh] z-10">
        <div className="text-center max-w-md w-full p-5 m-4">
          <h5 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Why <br /> Learn with Us?
          </h5>
          <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-gray-700">
            These are few reasons Why We Stand Out !!!
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          <LearnCard
            src="https://sithcomputers.com/wp-content/uploads/2023/03/Data-Science.gif"
            desc="Once you are with us, we will be with you. Be a part of our thriving stock market learning private community"
            head="Complete Mentorship"
          />
          <LearnCard
            src="https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif"
            desc="Simple language that even a 10-year-old can understand the full stock market course"
            head="No Jargons & easy to understand"
          />
          <LearnCard
            src="https://i.pinimg.com/236x/d7/64/c7/d764c70776b64e523cb4eea2f322db96.jpg"
            desc="Powered by a learning execution system for you to implement stock market investment and trading strategies alongside"
            head="Not just learn, IMPLEMENT IT"
          />
        </div>
      </div>

      <div className="mt-10 md:mt-13">
        <h3 className="text-2xl md:text-3xl text-center font-semibold mb-2">
          Student Growth
        </h3>
        <StudentGrowthChart />
      </div>

      <div className="mt-10 md:mt-16">
        <Testimonial />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
