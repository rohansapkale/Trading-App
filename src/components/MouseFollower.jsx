import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';


const MouseFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      followerRef.current.style.left = `${clientX}px`;
      followerRef.current.style.top = `${clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={followerRef}
      className="mouse-follower fixed w-6 h-6 bg-orange-500 rounded-full z-50 pointer-events-none"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    />
  );
};

export default MouseFollower;
