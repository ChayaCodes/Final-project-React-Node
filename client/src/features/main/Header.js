import React, { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import { Box, IconButton, Link, Drawer, List, ListItem, ListItemText, useMediaQuery, useTheme, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken } from '../../store/auth/authSlice';

const pages = ['בית', 'אודות', 'קורסים', 'הדרכות', 'קהילה', 'צור קשר']
const links = ['/', '/about', '/courses', '/tutorials', '/community', '/contact']

const Header = () => {
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleClickToPersonalArea = () => {
    console.log("click")
    const token = localStorage.getItem('token');
    if(token) {
      //שומר את הטוקן בסטור - רידקס
      dispatch(setToken({ token }));
      //מעביר לדף האישי
      navigate('/personal-area');
      console.log("click")
    }else{
      //מעביר לדף ההתחברות
      navigate('/login');
    }
  }

  return (
    <Toolbar disableGutters>
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
                      <Link href={links[index]} style={{ padding: '10px' , color:'#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
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
              <Box>LOGO</Box>
            </Grid>
            <Grid item xs={8}>
              <Box display="flex"  alignItems="center" justifyContent={'center'} style={{ width: '100%' }}> 
                {pages.map((page, index) => (
                  <Link key={index} href={links[index]} style={{ padding: '10px' , color:'#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
                    {page}
                  </Link>
                ))}
              </Box>
            </Grid>

          </>
        )}
        <Grid item>
          <IconButton aria-label="לאיזור האישי" size='small' edge="start" variant="outlined" style={{ padding: '5px' }} onClick={ handleClickToPersonalArea}>
            לאיזור האישי
            <FontAwesomeIcon icon={faCircleUser} style={{ color: 'black' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  );
}

export default Header;