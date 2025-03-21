// Header.js
import React from 'react';
import MentorSearch from './MentorSearch'; // Import MentorSearch
import './Header.css'; // Add specific styles here

const Header = ({ login }) => {
  return (
    <header className="header">
      <div className="logo">MentoLink</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">Feed</a>
        <a href="#">Mentorship</a>
        <a href="#">Roadmaps</a>
        <a href="#">Why MentoLink</a>
        <a href="#">How it Works</a>
      </nav>
      {/* Add MentorSearch here */}
      <div className="mentor-search-container">
        <MentorSearch />
      </div>
      <div className="buttons">
        <button className="download">Sign Up</button>
        <button className="login" onClick={login}>Login</button>
      </div>
    </header>
  );
};

export default Header;
