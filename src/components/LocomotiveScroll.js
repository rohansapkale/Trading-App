// src/components/LocomotiveScroll.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles
import { useLocation } from 'react-router-dom';

const LocomotiveScrollComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollEl = document.querySelector('#main-container');
    if (!scrollEl) return;

    const scroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Update Locomotive Scroll on route change
    scroll.update();

    // Clean up on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location]);

  return null;
};

export default LocomotiveScrollComponent;
