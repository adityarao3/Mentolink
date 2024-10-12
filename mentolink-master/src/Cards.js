import React from 'react';
import './Cards.css'; // Add styles for cards section here

const Cards = () => (
  <section className="cardsl">
    <div className="cardm community">
      <h3>Community</h3>
      <p>Connect with 1 thousand+ peers</p>
    </div>
    <div className="cardm mentors">
      <h3>Mentors</h3>
      <p>30+ Mentors, 500+ Queries Resolved</p>
    </div>
    <div className="cardm ask">
      <h3>Ask Anything</h3>
      <p>We find you a mentor!</p>
    </div>
    <div className="cardm roadmaps">
      <h3>Roadmaps</h3>
      <p>Solve skill-based roadmaps</p>
    </div>
    <div className="cardm problems">
      <h3>Alumni Finder</h3>
      <p>Find Your College Alumni At One Place</p>
    </div>
    <div className="cardm problems">
      <h3>MentoAI</h3>
      <p>AI Support for better Assitance</p>
    </div>
  </section>
);

export default Cards;
