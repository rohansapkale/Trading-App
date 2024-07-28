// src/components/LocomotiveScroll.js
import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import { useLocation } from 'react-router-dom';

const LocomotiveScrollComponent = () => {
  const location = useLocation();

  useEffect(() => {
    const initScroll = () => {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('#main-container'),
        smooth: true,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      });

      scroll.update();

      return () => {
        if (scroll) scroll.destroy();
      };
    };

    const timeoutId = setTimeout(initScroll, 100);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default LocomotiveScrollComponent;
