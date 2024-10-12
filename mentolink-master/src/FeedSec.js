import React from 'react';
import userData from './FeedData';
import './FeedSec.css' // Assuming data.js is in the same folder
import Sidebar from './Sidebar';

const NestedDivs = () => {
  return (
    
    
    <div className="max-w-lg mx-auto mt-10 space-y-6">
      {userData.map((user, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
          {/* First Div (Profile and Username) */}
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={user.profilePhoto} 
              alt={user.username} 
              className="w-12 h-12 rounded-full object-cover border border-gray-300"
            />
            
            <div>
              <h2 className="font-bold text-gray-800">{user.username}</h2>
              <span className="text-sm text-gray-500">Posted 2 hours ago</span>
            </div>
          </div>

          {/* Second Div (Post) */}
          <div className="text-gray-700 mb-4">
            {user.post}
          </div>

          <div className="imgae w-[100%] border border-gray-300">
          <img src={user.img} alt="" className='w-[100%], border border-gray-300 w-full' />
          </div>
          {/* Third Div (Like, Comment, Share) */}
          <div className="flex justify-between mt-4 border-t pt-4 border-gray-300">
            <button className="flex items-center text-blue-500 hover:text-blue-700 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9l-3 3m0 0l-3-3m3 3V4m0 8l3 3m-3-3l-3 3"></path></svg>
              Like
            </button>
            <button className="flex items-center text-gray-500 hover:text-gray-700 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-7 7-7-7"></path></svg>
              Comment
            </button>
            <button className="flex items-center text-green-500 hover:text-green-700 transition">
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NestedDivs;