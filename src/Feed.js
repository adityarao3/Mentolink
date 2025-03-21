import "./App.css";
import { studentsData } from "./data";
import React, { useState } from "react";
import "./Feed.css";

// Separate AlumniCard Component
const AlumniCard = ({ name, degree, year, linkedIn, profilePic }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={profilePic} alt={`${name}'s Profile`} className="profile-pic" />
        <h3 className="student-name">{name}</h3>
        <p className="student-degree">{degree}</p>
        <p className="student-year">Class of {year}</p>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

function Feed() {
  const [selectedCollege, setSelectedCollege] = useState("");
  const [students, setStudents] = useState([]);

  const handleCollegeChange = (e) => {
    const college = e.target.value;
    setSelectedCollege(college);
    setStudents(studentsData[college] || []);
  };

  return (
    <div className="App">
      <div className="alumni-finder">
        <h1>Alumni Finder</h1>
        <label htmlFor="college-select">Select College: </label>
        <select
          id="college-select"
          onChange={handleCollegeChange}
          value={selectedCollege}
        >
          <option value="">--Choose a College--</option>
          {Object.keys(studentsData).map((college) => (
            <option key={college} value={college}>
              {college}
            </option>
          ))}
        </select>

        <div className="alumni-list">
          <h2>Alumni List</h2>
          {students.length > 0 ? (
            <div className="card-container">
              {students.map((student, index) => (
                <AlumniCard
                  key={index}
                  name={student.name}
                  degree={student.degree}
                  year={student.year}
                  linkedIn={student.linkedIn}
                  profilePic={student.profilePic}
                />
              ))}
            </div>
          ) : (
            <p>No students available for this college.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Feed;
