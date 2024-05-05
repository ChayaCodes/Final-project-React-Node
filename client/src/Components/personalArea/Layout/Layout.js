import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { Box } from '@mui/material';
import Header from '../Header/Header';
import PersonalArea from '../personalArea/PersonalArea'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import { selectUser } from '../../../features/auth/authSlice';
import useAuth from '../../../hooks/useAuth';
import './Layout.css';

function Layout() {
  const navigate = useNavigate();
  // אם המשתמש לא מחובר נשלח אותו לדף התחברות
  const user = useAuth();

  useEffect(() => {
    if(user === null){
      navigate('../login');
    }
    else{
    }
  }, [user, navigate]);

  return (
    <div className="page">
      <Header />
      <Box className="main-container" sx={{ display: 'flex' }} >
        <SidebarNavigation/>
        <Box sx={{ width: '100%', alignItems: 'center' }}>
          <PersonalArea />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default Layout;
