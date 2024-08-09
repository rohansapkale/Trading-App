import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import axios from 'axios'; // Import axios for API calls
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import LearnCard from '../components/LearnCard';
import personalTrainingImage from '../assets/personal_training.jpg';
import liveEducationImage from '../assets/live_education.jpg';
import Courses from '../components/Courses';
import './Home.css'
const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const [studentCount, setStudentCount] = useState(800);
  const [niftyValue, setNiftyValue] = useState(null);
  const [sensexValue, setSensexValue] = useState(null);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount(prevCount => prevCount + 1);
    },   5000); // 5 minutes in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const responseNifty = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=NSE:NIFTY&interval=1min&apikey=YOUR_API_KEY`);
        const responseSensex = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=BSE:SENSEX&interval=1min&apikey=YOUR_API_KEY`);
        
        // Extract the latest closing values
        const niftyData = responseNifty.data['Time Series (1min)'];
        const sensexData = responseSensex.data['Time Series (1min)'];
        
        const latestNifty = Object.values(niftyData)[0]['4. close'];
        const latestSensex = Object.values(sensexData)[0]['4. close'];
        
        setNiftyValue(latestNifty);
        setSensexValue(latestSensex);
      } catch (error) {
        console.error("Error fetching market data:", error);
      }
    };

    fetchMarketData(); // Fetch market data on component mount

    // Optional: Set up polling to refresh market data periodically
    const interval = setInterval(() => {
      fetchMarketData();
    }, 5 * 60 * 1000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div data-scroll-section>
      <div className="h-screen w-full flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-no-repeat">
        <h1 ref={headingRef} className="text-3xl md:text-4xl lg:text-5xl flex gap-2 text-white text-center">
          Top Rated Institute For
        </h1>
        <h2 ref={subheadingRef} className="text-4xl md:text-5xl lg:text-6xl mt-8 text-white text-center">
          Stock Market Trading
        </h2>
        <h3 className="text-xl md:text-2xl lg:text-3xl mt-8 text-white text-center">
          Students Enrolled: {studentCount}
        </h3>
        <div className="mt-8 flex gap-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Nifty: {niftyValue ? niftyValue : '-'}
          </button>
          <button className="bg-green-500 text-white py-2 px-4 rounded">
            Sensex: {sensexValue ? sensexValue : '-'}
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="cards-container flex flex-wrap justify-center gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
            <CourseCard
              title="Beginner to Advance Equity Course"
              description="Learn the Market from the scratch to expert in Equity Segment"
              imageUrl="https://d70qr9v5jzijw.cloudfront.net/3_1617199392.jpeg"
              imageAlt="Beginner to Advance Equity Course"
            />
            <CourseCard
              title="Live Education Market"
              description="Learn the Easy and Effective way of Options Trading and Equity Trading"
              imageUrl={liveEducationImage}
              imageAlt="Live Education Market"
            />
            <CourseCard
              title="Personal Training"
              description="Learn the Market Depth from Personal Training in both Live and Offline Market and be the Expert"
              imageUrl={personalTrainingImage}
              imageAlt="Personal Training"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white">
        <div className="flex flex-col items-center max-w-md w-full bg-white text-center">
          <div className="p-5 m-4">
            <a href="#">
              <h5 className="mb-2 text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                Why <br /> Learn with Us?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              These are few reasons Why We Stand Out !!!
            </p>
          </div>
        </div>
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
      <div className="p-4">
        <Courses />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
