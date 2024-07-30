// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import LearnCard from '../components/LearnCard';
import './Home.css';

const Home = () => {
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
      <div className="h-screen w-full flex flex-col items-center justify-center bg-hero bg-cover bg-center bg-no-repeat">
        <h1  ref={headingRef} className="text-3xl flex gap-2 text-white">
          Top Rated Institute For
        </h1>
        <h2  ref={subheadingRef} className="text-4xl mt-8 text-white">
          Stock Market Trading
        </h2>
      </div>
      <div className="text-center py-8 bg-gray-100">
        <h3 className="text-6xl text-zinc-800 font-semibold text-neutral-800 dark:text-zinc-800 ">
          Our <br /> Services
        </h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CourseCard
            title="Beginner Courses"
            description="We provide exclusive courses and programs as an introduction to the field to the beginners"
            imageUrl="https://d70qr9v5jzijw.cloudfront.net/3_1617199392.jpeg"
            imageAlt=""
          />
          <CourseCard
            title="Professional Courses"
            description="We Provide well-designed and unique courses for higher level of professional training"
            imageUrl="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202108/stock_market_%281%29.jpg?size=1200:675"
            imageAlt=""
          />
          <CourseCard
            title="Online Courses"
            description="We offer multiple courses online to avail the distance learning for individuals who are passionate about the stock market"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRbzl5SAAczonazxm6b0BI81PFbS4-FcV2UA&s"
            imageAlt=""
          />
          <CourseCard
            title="Personal Training"
            description="We also provide personal training to prepare individuals for global financial markets"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGb3T9oU_RPINhNiLuCncCsqtcWl9cYl3nNw&s"
            imageAlt=""
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 bg-white">
        <div className="flex flex-row flex-wrap justify-center gap-4">
          <div className="max-w-xs w-full bg-white align-center justify-center">
            <div className="p-5 m-12">
              <a href="#">
                <h5 className="mb-2 text-5xl font-bold align-center justify-center tracking-tight text-gray-900 dark:text-gray-900">
                  Why <br /> Learn with Us ?
                </h5>
              </a>
              <p className="mb-3 font-normal align-center justify-center text-gray-700 dark:text-gray-400">
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
            desc="Simple language that even a 10 year old can understand the full stock market course"
            head="No Jargons & easy to understand"
          />
          <LearnCard
            src="https://i.pinimg.com/236x/d7/64/c7/d764c70776b64e523cb4eea2f322db96.jpg"
            desc="Powered by a learning execution system for you to implement stock market investment and trading strategies alongside"
            head="Not just learn, IMPLEMENT IT"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
