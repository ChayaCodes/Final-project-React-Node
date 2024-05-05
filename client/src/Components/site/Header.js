import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import {
  Box, IconButton, Link, Drawer, List, ListItem, useMediaQuery, useTheme, Grid,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../app/auth/authSlice';
import { useEffect } from 'react';

const pages = ['בית', 'אודות', 'קורסים', 'הדרכות', 'קהילה', 'צור קשר'];
const links = ['/', '/about', '/courses', '/tutorials', '/community', '/contact'];

function Header() {
  const dispatch = useDispatch();

  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const show = window.scrollY > 100;
    if (show !== isScrolled) setIsScrolled(show);
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [isScrolled]);

  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickToPersonalArea = () => {
    navigate('/personal-area');
  };


  return (
    <Toolbar
      disableGutters
      style={{
        backgroundColor: isScrolled ? 'white' : 'rgba(255, 255, 255, 0.2)',
        backdropFilter: isScrolled ? 'none' : 'blur(10px)',
        transition: 'background-color 3s ease, backdrop-filter 3s ease',
        position: 'sticky',
        width: '100%',
        height: '100%',
        padding: '0',
        top: '0',
        left: '0',
        margin: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: '1000',
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">

        {isMobile ? (
          <>

            <Grid item>
              <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} transitionDuration={0}>
                <List>
                  {pages.map((page, index) => (
                    <ListItem button key={index} onClick={handleDrawerToggle}>
                      <Link href={links[index]} style={{ padding: '10px', color: '#00000' }} fontFamily="Arial" fontSize={17} color="#000000" underline="none">
                        {page}
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </Grid>
            <Grid item>
              <Box>LOGO</Box>
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Box style={{ padding: '10px' }}
              >LOGO</Box>
            </Grid>
            <Grid item xs={8}>
              <Box display="flex" alignItems="center" justifyContent="center" style={{ width: '100%' }}>
                {pages.map((page, index) => (
                  <Link key={index} href={links[index]} style={{ padding: '10px', color: '#00000' }} fontFamily="Arial" fontSize={17} color="#000000" underline="none">
                    {page}
                  </Link>
                ))}
              </Box>
            </Grid>

          </>
        )}
        <Grid item>
          <IconButton aria-label="לאיזור האישי" size="small" edge="start" variant="outlined" style={{ padding: '10px' }} onClick={handleClickToPersonalArea}>
            לאיזור האישי
            <FontAwesomeIcon icon={faCircleUser} style={{ color: 'black' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Header;
