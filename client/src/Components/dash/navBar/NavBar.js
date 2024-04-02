import React from 'react';
import './navBar.css';
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md';

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-title">
        ראשי
      </div>
      <div className="nav-bar-menu">
        <div className="nav-bar-search">
          <MdSearch size={20} />
          <input type="text" placeholder="search" className="nav-bar-search-input" />
        </div>
        <div className="nav-bar-icons">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />

        </div>
      </div>
    </div>
  );
}

export default NavBar;
