import React from 'react';
import './AlumniFinder.css'; // Assuming you have the CSS in this file

const AlumniCard = ({ name, degree, year, linkedIn, profilePic }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={profilePic} alt={`${name}'s Profile`} className="profile-pic" />
        <h2 className="student-name">{name}</h2>
        <p className="student-degree">{degree}</p>
        <p className="student-year">{year}</p>
        <a href={linkedIn} className="linkedin-button" target="_blank" rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default AlumniCard;
