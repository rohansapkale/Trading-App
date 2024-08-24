import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import BgVideo from '../assets/bg-video.mp4';
const VideoSection = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const staticCountRef = useRef(null);
  const countRef = useRef(null);
  const [studentCount, setStudentCount] = useState(0);
  const [liveClasses, setLiveClasses] = useState(0);

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
    )
      .fromTo(
        subheadingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '<0.8'
      )
      .fromTo(
        countRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '<0.8'
      )
      .fromTo(
        staticCountRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '<0.8'
      );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStudentCount((prevCount) => {
        if (prevCount < 800) {
          return prevCount + 5;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setLiveClasses((prevCount) => {
        if (prevCount < 240) {
          return prevCount + 1;
        } else {
          clearInterval(countInterval);
          return prevCount;
        }
      });
    }, 20);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src={BgVideo}
        >
          <source
            src={BgVideo}
            type="video/mp4"
          />
          <source
            src="https://static.vecteezy.com/system/resources/previews/042/538/438/stock-market-price-for-investment-and-digital-trading-animation-free-video.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
        {/* Black opacity overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Overlaid Text and Button */}
      <div className="relative z-10 text-center text-white">
        <h2
          ref={subheadingRef}
          className="text-4xl text-white md:text-5xl lg:text-6xl xl:text-7xl mt-4 md:mt-6 lg:mt-8 xl:mt-10 text-center relative z-10"
        >
          The Easy Traders
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <div className="text-white text-center rounded-lg shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Students Enrolled: <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl">{studentCount}+</span>
            </h3>
          </div>
          <div className="text-white text-center rounded-lg shadow-lg p-4 md:p-6 lg:p-8 xl:p-10 relative z-10 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Live Classes: <span className="font-extrabold text-2xl md:text-3xl lg:text-4xl">{liveClasses}+</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
