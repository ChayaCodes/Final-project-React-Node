import React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@mui/material';
import { IconButton, Badge } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Breadcrumb from '../Breadcumb';
import './header.css';



function Header({setIsSidebarOpen, isSidebarOpen}) {
  const handleMenueOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const user = useSelector((state) => state.auth.user);

  const userName = user ? user.userName : 'אורח';

  const isMobile = useMediaQuery('(max-width:600px)');

  const avatar = user? user.avatar : null;
  

  if (isMobile) {
    return (
      <header position="sticky" className="header">

        <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenueOpen}>
          <FontAwesomeIcon icon={faBars} color="black" />
        </IconButton>
        <div className='breadcrumbBox'>
          <Breadcrumb />
        </div>
        <div className='btns'>
          <div className='userBox'>
            <FontAwesomeIcon icon={faUserCircle} style={{ marginLeft: '5px' }} />
            {`היי ${userName}`}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header position="sticky" className="header">

      <div>
        LOGO
      </div>
      <div className='breadcrumbBox'>
        <Breadcrumb />
      </div>
      <div className='btns'>
        <div className='userBox'>
         <FontAwesomeIcon icon={faUserCircle} style={{ marginLeft: '5px' }} />
          {`היי ${userName}`}
        </div>
      </div>
    </header>
  );
}

export default Header;
