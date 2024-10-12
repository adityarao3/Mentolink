// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Header from './Header';
import Hero from './Hero';
import Cards from './Cards';
import ProfileCard from './ProfileCard';
import AIChat from './AIChat';
import FeedSec from './FeedSec';
import Booking from './Booking';
import BookingForm from './BookingForm';

import './App.css';

const AppContent = ({ isAuthenticated, login, logout }) => {
  return (
    <div>
      {isAuthenticated ? (
        <div className="app">
          <Header logout={logout} />
          <Sidebar />
          
          <Feed />
          <button onClick={logout} className="logout-button">Logout</button>
        </div>
      ) : (
        
        <>
        
          <Header login={login} />
          <div className="hero-container">
            <Hero />
            
    
            </div>
           
      
          <Cards />
        </>
        
      )}
    </div>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Sync authentication state with localStorage
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<AppContent isAuthenticated={isAuthenticated} login={login} logout={logout} />}
        />

        {/* Protected Route for authenticated users */}
        <Route
          path="/profile"
          element={isAuthenticated ? <ProfileCard /> : <Navigate to="/" />}
        />
        <Route
          path="/chat"
          element={isAuthenticated ? <AIChat /> : <Navigate to="/" />}
        />
        <Route
          path="/chatbot"
          element={isAuthenticated ? <AIChat /> : <Navigate to="/" />}
        />
        <Route
          path="/post"
          element={isAuthenticated ? <FeedSec /> : <Navigate to="/" />}
        />
       
       <Route
          path="/booking"
          element={isAuthenticated ? <Booking /> : <Navigate to="/" />}
        />
         <Route path="/" element={<Booking />} />  {/* Points to Booking.js */}
         <Route path="/booking-form" element={<BookingForm />} 
         />
    
      </Routes>
    </Router>
  );
};

export default App;
