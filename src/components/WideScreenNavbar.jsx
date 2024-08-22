import React from 'react';
import { Link } from 'react-router-dom';
import './WideScreenNavbar.css';

const WideScreenNavbar = () => {
  return (
    <nav className="wide-screen-navbar">
      <ul className="flex justify-end space-x-8 p-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to="/mentor">Mentor</Link></li> */}
      </ul>
    </nav>
  );
};

export default WideScreenNavbar;
