import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [reason, setReason] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [price, setPrice] = useState('₹2,649'); // Default selected price

  const handleResumeUpload = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form submission logic
    console.log({ name, email, resume, reason, phoneNumber, price });
  };

  return (
    <div className="form-booking-form-container">
      <header className="form-booking-header">
        <h2>Mock Interview / Resume Review</h2>
        <p>Video Call | 45 mins</p>
        <div className="form-booking-date-time">
          <span>Sun, 29 Sep</span> | <span>12:30 - 1:15 PM (GMT +05:30)</span>
        </div>
      </header>

      <form onSubmit={handleSubmit} className="form-booking-form">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <label>Can you upload your latest resume?</label>
        <input type="file" onChange={handleResumeUpload} className="form-resume-upload" />

        <label>Reason for the booking</label>
        <input
          type="text"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for booking"
        />

        <label>Phone Number</label>
        <div className="form-phone-input">
          <select>
            <option value="+91">+91</option>
            {/* Add more country codes if needed */}
          </select>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Phone number"
            required
          />
        </div>

        <div className="form-booking-checkbox">
          <input type="checkbox" id="receiveUpdates" />
          <label htmlFor="receiveUpdates">Receive booking details on phone</label>
        </div>

        <h3>Pay what you like</h3>
        <div className="form-price-options">
          {['₹1,999', '₹2,249', '₹2,649', '₹3,748'].map((option) => (
            <button
              type="button"
              key={option}
              className={`form-price-button ${price === option ? 'form-selected' : ''}`}
              onClick={() => setPrice(option)}
            >
              {option} {option === '₹2,649' && <span className="form-popular">POPULAR</span>}
            </button>
          ))}
        </div>

        <div className="form-order-summary">
          <h4>Order Summary</h4>
          <p>1 x Mock Interview / Resume Review</p>
          <p>Platform fee: ₹10</p>
          <p>Total: {price === '₹2,649' ? '₹2,009' : price}</p>
        </div>

        <button type="submit" className="form-submit-button">
          Confirm and Pay
        </button>
      </form>

      <footer className="form-booking-footer">
        <p>Payments are 100% secure & encrypted</p>
        <p>Powered by MentoAI.io</p>
      </footer>
    </div>
  );
};

export default BookingForm;
