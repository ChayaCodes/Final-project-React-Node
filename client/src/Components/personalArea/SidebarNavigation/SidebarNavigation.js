import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SidebarNavigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faVideo, faUsers, faCalendarWeek } from '@fortawesome/free-solid-svg-icons';

function SidebarNavigation({setIsSidebarOpen, isSidebarOpen}) {
  

  return (
    <div className={`sidebar-navigation ${isSidebarOpen ? 'is-visible' : ''}`}>
      <ul className='sidebar-navigation-list'>
        <li><FontAwesomeIcon icon={faChalkboardTeacher}/><Link to="/personal-area/courses">קורסים</Link></li>
        <li><FontAwesomeIcon icon={faVideo}/><Link to="/personal-area/videos">סרטונים</Link></li>
        <li><FontAwesomeIcon icon={faUsers}/><Link to="/personal-area/community">קהילה</Link></li>
        <li><FontAwesomeIcon icon={faCalendarWeek}/><Link to="/personal-area/zoom">הזום השבועי</Link></li>
      </ul>
    </div>
  );
}

export default SidebarNavigation;