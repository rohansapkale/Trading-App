// src/components/LocomotiveScroll.js
import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles
import { useLocation } from 'react-router-dom';

const LocomotiveScrollComponent = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    if (!scrollEl) return;

    const initializeScroll = () => {
      scrollRef.current = new LocomotiveScroll({
        el: scrollEl,
        smooth: true,
        lerp: 1.0, // Adjusts the smoothness
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });
    };

    initializeScroll();

    // Update Locomotive Scroll on route change after a short delay
    const handleRouteChange = () => {
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.update();
        }
      }, 300); // Adjust delay as needed
    };

    handleRouteChange();

    // Clean up on component unmount
    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    };
  }, [location]);

  return null;
};

export default LocomotiveScrollComponent;
