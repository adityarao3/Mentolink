import React from 'react';
import './ProfileCard.css'; // External CSS for styling
import { useNavigate } from 'react-router-dom';


// Example Data Structure with Random Names, Sessions, and Feedback
const profiles = [
  {
    name: 'Aditya Rao',
    description: 'Technology Enthusiast and a Mentor for more than a year',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    badges: ['Top 1%', '221 Bookings', 'Top Rated 2023', 'Top Rated Software'],
    skills: ['Technology', 'Mentoring', 'Software Engineering']
  },
  {
    name: 'Aman Singh',
    description: 'Career Coach and Resume Expert',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    badges: ['500+ Bookings', 'Top Rated 2023', 'Resume Guru'],
    skills: ['Technology', 'Mentoring', 'Software Engineering']
  },
  {
    name: 'Amandeep ummat',
    description: 'Expert in UK/EU Relocation & Study Opportunities',
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['React Development', 'Javascript', 'MernStack']
  },
  {
    name: 'Amanpreet Kaur',
    description: 'Expert in (Data Base management/Operating System)UK/EU Relocation & Study Opportunities',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['Angular', 'MongoDB', 'Java']
  },
  {
    name: 'Shradha Khapra',
    description: 'Expert in Web Development(React.js/java script)/Co-founder, Apna College | Ex-Microsoft | Tedx Speaker | Google SPS\'20',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    badges: ['Top Mentor', '1000+ Bookings', 'Relocation Specialist'],
    skills: ['DSA', 'C++', 'Software Engineering']
  },
  {
    name: 'Love Babbar',
    description: 'Expert: DSA/Founder - CodeHelp | SSB Recommended | TedX Speaker | Ex-Amazon | Ex-Microsoft',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    badges: ['Top Mentor', '10000+ Bookings', 'Software Design Specialist'],
    skills: ['HTml', 'Mentoring', 'Software Engineering']
  },
  {
    name: 'Aman Kumar',
    description: 'Expert: in FLAT ,DSA,Software  ',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
    badges: ['Top Mentor', '10000000000+ Bookings', 'Software Design Specialist And Gaming']
  }
];

const sessionData = [
  { title: '1:1 Mentoring', duration: '60 mins', type: 'Video Meeting', price: '₹999' },
  { title: 'Move to UK/Europe (Study/Work)', duration: '30 mins', type: 'Video Meeting', price: '₹499' },
  { title: 'Mock interview / Resume Review', duration: '45 mins', type: 'Video Meeting', price: '₹199+' },

];

const feedbackData = [
  { rating: 5, text: 'Fantastic session, the mentor was really insightful and gave me great career advice!', author: 'John Doe', date: '1st Jul, 2024' },
  { rating: 4, text: 'Helpful tips on improving my resume and preparing for interviews. Definitely worth it!', author: 'Jane Smith', date: '3rd Aug, 2024' },
  { rating: 5, text: 'A very engaging session, I learned a lot about the process of moving abroad for studies!', author: 'Michael Johnson', date: '15th Jun, 2024' },
  { rating: 5, text: 'Very friendly and knowledgeable, answered all my questions with patience.', author: 'Emily Davis', date: '20th Apr, 2024' },
  { rating: 4, text: 'Good insights into the tech industry, would recommend to others.', author: 'David Lee', date: '10th May, 2024' }
];

const ProfileCard = ({ profile, sessions, feedbacks }) => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking'); // Navigate to the booking page on button click
  };
  return (
    <div className="profile-container">
      {/* Left Section */}
      <div className="profile-info">
        <div className="profile-header">
          <img
            src={profile.image}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-badge">
            <i className="verified-icon">✔️</i>
          </div>
        </div>
        <h2>{profile.name}</h2>
        <p>{profile.description}</p>
        <div className="badges">
          {profile.badges.map((badge, index) => (
            <div className="badge" key={index}>{badge}</div>
          ))}
        </div>
        <button className="discover-btn">Discover | Get Listed</button>
      </div>

      {/* Right Section */}
      <div className="session-cards">
        <div className="filters">
          <button className="filter-btn">All</button>
          <button className="filter-btn" onClick={handleBooking}>1:1 Call</button>
          <button className="filter-btn">Priority DM</button>
        </div>
        {/* Map through sessions and generate cards dynamically */}
        {sessions.map((session, index) => (
          <div className="card" key={index}>
            <h3>{session.title}</h3>
            <p>{session.duration} - {session.type}</p>
            <button className="price-btn">{session.price} →</button>
          </div>
        ))}
      </div>

      {/* Ratings and Feedback Section */}
      <div className="ratings-feedback">
        <h2>Ratings and feedback</h2>
        <div className="rating-overview">
          <div className="rating-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThhom8LYQ9qa9NHJbgRkrn2uJZL1-jilEqMw&s" alt="Rating Icon" />
          </div>
          <div className="rating-score">
            <h3>4.8/5</h3>
            <p>24 Ratings</p>
          </div>
          <div className="testimonials">
            <h3>18</h3>
            <p>Testimonials</p>
          </div>
        </div>
        <div className="feedback-cards">
          {/* Map through feedbacks and generate feedback cards dynamically */}
          {feedbacks.map((feedback, index) => (
            <div className="feedback-card" key={index}>
              <p><strong>{feedback.rating}/5</strong> {feedback.text}</p>
              <small>{feedback.author}, {feedback.date}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Passing Random Data to Multiple Profiles
const App = () => {
  return (
    <div>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          profile={profile}
          sessions={sessionData} // Same sessions for all profiles (You can customize if needed)
          feedbacks={feedbackData} // Same feedback for all profiles (You can customize if needed)
        />
      ))}
    </div>
  );
};

export default App;
