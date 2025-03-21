import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import './Booking.css';

const Booking = () => {  // Component renamed to match your previous name
  const [selectedDate, setSelectedDate] = useState('Sun 29 Sep');
  const [selectedTime, setSelectedTime] = useState('12:30 PM');
  const navigate = useNavigate(); // Initialize navigate for routing

  const dates = ['Sun 29 Sep', 'Sat 05 Oct', 'Sun 06 Oct', 'Sat 12 Oct', 'Sun 13 Oct'];
  const times = ['12:30 PM', '01:15 PM', '02:00 PM', '02:45 PM'];

  const handleContinueClick = () => {
    // Perform any necessary actions before navigation, like saving state
    navigate('/booking-form'); // Redirect to BookingForm component when clicked
  };

  return (
    <div className="booking-container">
      {/* Left Section */}
      <div className="booking-profile-card">
        <div className="booking-back-icon">←</div>
        <div className="booking-profile-details">
          <img
            className="booking-profile-picture"
            src="https://media.licdn.com/dms/image/D4D03AQFpA5Kz4b3VbA/profile-displayphoto-shrink_200_200/0/1683635155071?e=2147483647&v=beta&t=QybjMYYSIvvkM3rr4vigUf1EeILL2KcRWKtCeuNMRKs"
            alt="Profile"
          />
          <h3>Aditya Rao</h3>
          <div className="booking-rating">⭐ 5/5</div>
        </div>
        <h2>Mock interview / Resume Review</h2>
        <p>₹1,999+ • 45 mins meeting</p>
        <div className="booking-tags">
          <span className="booking-tag">Patient</span>
          <span className="booking-tag">Mentoring</span>
        </div>
        <div className="booking-description">
          Highly praised for insightful guidance, personalized mentorship, and extensive iOS expertise. Known for patience, honesty, and practical career advice, fostering trust and confidence.
        </div>
        <div className="booking-description-subtext">AI-generated based on testimonials</div>
      </div>

      {/* Right Section */}
      <div className="booking-schedule-card">
        <h3>When should we meet?</h3>
        <div className="booking-dates">
          {dates.map((date) => (
            <button
              key={date}
              className={`booking-date-button ${selectedDate === date ? 'active' : ''}`}
              onClick={() => setSelectedDate(date)}
            >
              {date}
            </button>
          ))}
        </div>
        <h3>Select time of day</h3>
        <div className="booking-times">
          {times.map((time) => (
            <button
              key={time}
              className={`booking-time-button ${selectedTime === time ? 'active' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>
        <p className="booking-timezone">Timezone: (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)</p>
        <button className="booking-continue-button" onClick={handleContinueClick}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default Booking;
