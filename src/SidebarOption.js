import React from "react";
import "./SidebarOption.css";

function SidebarOption({ active, text, onClick }) {
  return (
    <div 
      className={`sidebarOption ${active && "sidebarOption--active"}`} 
      onClick={onClick} // Add the onClick handler
      style={{ cursor: 'pointer' }} // Optional: Makes it clear that it's clickable
    >
      
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
