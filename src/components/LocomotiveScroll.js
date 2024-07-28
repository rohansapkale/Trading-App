// src/components/LocomotiveScroll.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Import Locomotive Scroll styles

const LocomotiveScrollComponent = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('#main-container'), // This should be the container with smooth scroll
      smooth: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Clean up on component unmount
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return null;
};

export default LocomotiveScrollComponent;
