import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);
  const circleRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const html = document.documentElement;
    const circleWidth = circleRef.current.clientWidth;

    const getVpdr = () => {
      const vph = Math.pow(html.offsetHeight, 2);
      const vpw = Math.pow(html.offsetWidth, 2);
      const vpd = Math.sqrt(vph + vpw);
      return (vpd * 2) / circleWidth;
    };

    const openNavbar = () => {
      gsap.timeline()
        .to(navbarRef.current, { duration: 0, display: 'flex' })
        .to(circleRef.current, { duration: 1.5, scale: getVpdr(), ease: 'expo.inOut' })
        .staggerFromTo(
          '.navbar ul li',
          0.5,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1 },
          0.1,
          1
        );
    };

    const closeNavbar = () => {
      gsap.timeline()
        .staggerFromTo(
          '.navbar ul li',
          0.5,
          { y: 0, opacity: 1 },
          { y: 25, opacity: 0 },
          -0.1
        )
        .to(circleRef.current, { duration: 1, scale: 0, ease: 'expo.inOut', delay: -0.5 })
        .to(navbarRef.current, { duration: 0, display: 'none' });
    };

    if (isOpen) {
      openNavbar();
    } else {
      closeNavbar();
    }

    // Update circle radius on window resize
    const handleResize = () => {
      if (isOpen) {
        gsap.to(circleRef.current, { duration: 1, scale: getVpdr(), ease: 'expo.inOut' });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the navbar
  };

  return (
    <div id="wrapper">
      <button
        className={`navbar-toggle ${isOpen ? 'active' : ''}`}
        ref={toggleRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg id='menu-btn' viewBox="0 0 100 100" width="80">
          <path className="line top" d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40" stroke="white" />
          <path className="line middle" d="m 30,50 h 40" stroke="white" />
          <path className="line bottom" d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40" stroke="white" />
        </svg>
      </button>
      <div className="navbar" ref={navbarRef}>
        <ul>
          <li><Link data-text="1" to="/" onClick={handleLinkClick}>Home</Link></li>
          <li><Link data-text="2" to="/about" onClick={handleLinkClick}>About</Link></li>
          <li><Link data-text="3" to="/mentor" onClick={handleLinkClick}>Mentor</Link></li>
        </ul>
      </div>
      <div id="bg-circle" ref={circleRef}></div>
    </div>
  );
};

export default Navbar;
