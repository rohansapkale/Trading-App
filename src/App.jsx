// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar component
import Home from './pages/Home'; // Import your Home page component
import About from './pages/About'; // Import your About page component
import Mentor from './pages/Mentor'; // Import your Contact page component

const App = () => {
  return (
    <Router>
      <div id="main-container"  data-scroll-container>
       
        {/* <LogoHighlight/> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentor" element={<Mentor />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
