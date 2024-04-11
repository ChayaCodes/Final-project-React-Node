import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Header from './Header';
import PersonalArea from './PersonalArea'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();
  // אם המשתמש לא מחובר נשלח אותו לדף התחברות
  const user = useSelector((state) => state.auth.user);
  if(user === null){

    navigate('../login');
  }
  else{
    console.log('user is connected');
  return (
    <div className="page">
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ width: '100%', alignItems: 'center' }}>
          <PersonalArea />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}
}
export default Layout;
