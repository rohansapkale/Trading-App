import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const buttonRefs = useRef([]);
  const videoBorderRef = useRef(null);

  useEffect(() => {
    // GSAP animation for buttons
    buttonRefs.current.forEach((button) => {
      gsap.fromTo(button,
        { rotation: 0, transformOrigin: "center" },
        { 
          rotation: 360, 
          duration: 1,
          ease: "power1.inOut",
          paused: true 
        }
      );
    });
    
    // GSAP animation for gradient border
    gsap.to(videoBorderRef.current, {
      backgroundPosition: '200% 0',
      duration: 5,
      repeat: -1,
      ease: "linear"
    });
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-12 md:py-16 lg:py-24">
      {/* Background Images */}
      <img 
        src="https://static.tradingview.com/static/bundles/blure-mobile.b0f2539869b68e4030a3.svg" 
        className="absolute inset-0 w-full h-full object-cover md:hidden" 
        alt="Mobile Background" 
      />
      <img 
        src="https://static.tradingview.com/static/bundles/blure.52b20efca9ccfd6559b9.svg" 
        className="absolute inset-0 w-full h-full object-cover hidden md:block lg:hidden" 
        alt="Tablet Background" 
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold mb-4 text-gray-100">Where the world does markets</h2>
        <p className="text-lg mb-8 text-gray-300">
          Join 60 million traders and investors taking the future into their own hands.
        </p>
        
        {/* Buttons */}
        <a 
          href="/features/" 
          ref={(el) => buttonRefs.current[0] = el}
          className="hidden md:block lg:hidden px-6 py-3 bg-[#01010e] border border-gray-100 text-white rounded-full text-lg font-medium transition-transform duration-300 hover:bg-gray-700"
        >
          Explore features
        </a>
        <a 
          href="/features/" 
          ref={(el) => buttonRefs.current[1] = el}
          className="hidden lg:block px-8 py-4 bg-[#01010e] border border-gray-100 text-white rounded-full text-xl font-medium transition-transform duration-300 hover:bg-gray-700"
        >
          Explore features
        </a>
        <a 
          href="/features/" 
          ref={(el) => buttonRefs.current[2] = el}
          className="md:hidden px-4 py-2 bg-[#01010e] border border-gray-100 text-white rounded-full text-base font-medium transition-transform duration-300 hover:bg-gray-700"
        >
          Explore features
        </a>
      </div>
      
      {/* Video Section with Gradient Border and Glowing Effect */}
      <div className="relative z-10 flex items-center justify-center w-full min-h-[300px] mt-8">
        <div 
          className="relative w-full max-w-4xl border-4 border-transparent rounded-lg overflow-hidden"
          ref={videoBorderRef}
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(255,165,0,1) 0%, rgba(0,0,128,1) 100%)',
            backgroundSize: '200% 200%',
            boxShadow: '0 0 55px rgba(255,165,0,0.7), 0 0 75px rgba(0,0,128,0.7)'
          }}
        >
          <video 
            className="w-full h-full object-cover rounded-lg"
            autoPlay 
            loop 
            playsInline 
            muted
          >
            <source src="https://static.tradingview.com/static/bundles/chart-big.hvc1.28edcb3d97450fcb799f.mp4" type="video/mp4;codecs=hvc1.1.0.L150.b0" />
            <source src="https://static.tradingview.com/static/bundles/chart-big.a7d994603f412a3a4a52.webm" type="video/webm" />
            <source src="https://static.tradingview.com/static/bundles/chart-big.avc1.f201e709ee463d4a6893.mp4" type="video/mp4;codecs=avc1" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
