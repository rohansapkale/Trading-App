// src/pages/Mentor.js
import React, { useEffect, useRef } from 'react';
import Footer from '../components/Footer';
import { gsap } from 'gsap';
import './Mentor.css';

const Mentor = () => {
  const mentorSectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      mentorSectionRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 2.3, ease: 'power3.out',delay:'.7' }
    );
  }, []);

  return (
    <div data-scroll-section>
      <div className="h-screen w-full flex flex-col bg-zinc-900 items-center justify-center bg-cover bg-center bg-no-repeat">
        <div
          ref={mentorSectionRef}
          className="mentor-section bg-zinc-900 container mx-auto p-6 flex flex-col lg:flex-row-reverse items-center rounded-lg shadow-lg"
        >
          <div className="mentor-image w-full lg:w-1/3 flex justify-center lg:justify-end mb-4 lg:mb-0">
            <img
              src="https://via.placeholder.com/300"
              alt="Mentor"
              className="rounded-full shadow-lg w-48 h-48 lg:w-64 lg:h-64 object-cover"
            />
          </div>
          <div className="mentor-info text-white w-full lg:w-2/3 lg:pr-8 text-center lg:text-left">
            <h2 className="text-3xl font-bold  mb-2">John Doe</h2>
            <h3 className="text-xl  mb-4">Stock Trading Mentor</h3>
            <p className=" mb-6">
              John Doe is a seasoned stock trader with over 15 years of experience. He has a passion for teaching and has helped countless students understand the intricacies of stock trading. John believes in a hands-on approach to learning and always stays updated with the latest market trends.
            </p>
            <div className="social-links flex justify-center lg:justify-start space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentor;
