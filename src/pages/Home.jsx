import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import axios from 'axios';
import Footer from '../components/Footer';
import Courses from '../components/Courses';
import LearnCard from '../components/LearnCard';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.jpg';
import Testimonial from '../components/Testimonial';
import VideoSection from '../components/VideoSection'; // Import the VideoSection component
import './Home.css';
import TradingPortfolio from '../components/TradingPortfolio';
const Home = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const countRef = useRef(null);
  const staticCountRef = useRef(null);


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

      <VideoSection /> {/* Add the VideoSection component here */}
      <div id="OurCourse" className="p-4 relative z-1 -top-[12vh] md:-top-[30vh] lg:-top-[30vh]">
        <Courses />
      </div>
      <div>
        <TradingPortfolio />
      </div>
      <div className="flex flex-col items-center p-4 bg-white relative -top-[15vh] z-10">
        <div className="text-center max-w-md w-full p-5 m-4">
          <h5 className="mb-2 text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Why <br /> Learn with Us?
          </h5>
          <p className="mb-3 text-sm md:text-base lg:text-lg font-normal text-gray-700">
            We don't teach candlstick patterns,chart patterns or indicators.Instead, we dive into advanced concepts that offer high-conviction strategies,designed to empower your trading journey with precision and confidence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full">
          <LearnCard
            src={gif1}
            desc="Once you are with us, we will be with you. Be a part of our thriving stock market learning private community"
            head="Complete Mentorship"
          />
          <LearnCard
            src={gif2}
            desc="Simple language that even a 10-year-old can understand the full stock market course"
            head="No Jargons & easy to understand"
          />
          <LearnCard
            src={gif3}
            desc="Powered by a learning execution system for you to implement stock market investment and trading strategies alongside"
            head="Not just learn, IMPLEMENT IT"
          />
        </div>
      </div>



      <div className="mt-10 md:mt-16">
        <Testimonial />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
