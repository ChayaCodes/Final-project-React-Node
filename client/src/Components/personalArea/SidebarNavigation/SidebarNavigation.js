import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarNavigation.css';

function SidebarNavigation({setIsSidebarOpen, isSidebarOpen}) {
  

  return (
    <div className={`sidebar-navigation ${isSidebarOpen ? 'is-visible' : ''}`}>
      <ul>
        <li><Link to="/personal-area/courses">קורסים</Link></li>
        <li><Link to="/personal-area/tutorials">סרטונים</Link></li>
        <li><Link to="/personal-area/community">קהילה</Link></li>
        <li><Link to="/personal-area/zoom">הזום השבועי</Link></li>
      </ul>
    </div>
  );
}

export default SidebarNavigation;