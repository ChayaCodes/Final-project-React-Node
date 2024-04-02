import React from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';
import Header from './Header';
import PersonalArea from './PersonalArea';

function Layout() {
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
export default Layout;
