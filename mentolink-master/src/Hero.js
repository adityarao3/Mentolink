import React from 'react';
import './Hero.css'; 

const Hero = () => (
    <section className="hero">
        <h1>Your one stop solution for <span>skill-based learning</span></h1>
        <div className="hero-buttons">
            <button className="join-now">Join Now</button>
            <button className="download-app">SignUp Now</button>
        </div>
    </section>
);

export default Hero;
