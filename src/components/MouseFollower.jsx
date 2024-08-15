import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower = () => {
  const followerRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024); // Assuming large screens are above 1024px

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (followerRef.current) {
        const { clientX, clientY } = event;
        followerRef.current.style.left = `${clientX}px`;
        followerRef.current.style.top = `${clientY}px`;
      }
    };

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    isLargeScreen && (
      <motion.div
        ref={followerRef}
        className="mouse-follower fixed w-6 h-6 bg-orange-500 rounded-full z-50 pointer-events-none"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    )
  );
};

export default MouseFollower;
