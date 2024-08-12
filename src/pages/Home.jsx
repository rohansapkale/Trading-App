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
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prevCount) => {
        if (prevCount < 800) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, .1); 
  
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
          className="text-3xl md:text-4xl lg:text-5xl text-white text-center relative z-10"
        >
          Top Rated Institute For
        </h1>
        <h2
          ref={subheadingRef}
          className="text-4xl md:text-5xl lg:text-6xl mt-8 text-white text-center relative z-10"
        >
          Stock Market Trading
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 text-white text-center relative z-10">
          Students Enrolled: {studentCount}
        </h3>
      </div>

      <div
        id="OurCourse"
        className="p-4 relative z-1 -top-[25vh] md:-top-[30vh] lg:-top-[30vh]"
      >
        <Courses />
      </div>

      <div className="flex flex-col items-center p-4 bg-white relative -top-[15vh] z-10">
        <div className="text-center max-w-md w-full p-5 m-4">
          <h5 className="mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Why <br /> Learn with Us?
          </h5>
          <p className="mb-3 font-normal text-gray-700">
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
