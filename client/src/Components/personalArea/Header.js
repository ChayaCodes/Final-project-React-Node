import React from 'react';
import { Typography, IconButton, Link, Toolbar, Box, Badge, MenuItem } from '@mui/material';
import Breadcrumbs from './Breadcumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useGetUserQuery } from '../../app/user/userApiSlice';
import { useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Breadcrumb from './Breadcumb';
import SideBar from './SideMenu'
import { useState } from 'react';
import { Drawer, List, ListItem } from '@mui/material';
import { Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';


const pages = ['בית', 'אודות', 'קורסים', 'הדרכות', 'קהילה', 'צור קשר']
const links = ['/', '/about', '/courses', '/tutorials', '/community', '/contact']



const Header = () => {
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isMobile = useMediaQuery('(max-width: 600px)');


  const user = useSelector((state) => state.auth.user);
  const userName = user ? user.userName : "אורח";

    return (
      <AppBar position="sticky"
        sx={{ backgroundColor: 'white', height: "10vh", padding: 0, margin: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: 0, margin: 0, height: "100%" }}>
          <Grid item>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
              <FontAwesomeIcon icon={faBars} color='black' />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle} transitionDuration={0}>
              <List>
                <Typography variant="h6" style={{
                  flexGrow: 0, alignItems: 'center'
                }}> LOGO </Typography>
                <ListItem button onClick={handleDrawerToggle}>
                  <Link href='/personal-area/courses' style={{ padding: '10px', color: '#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
                    קורסים
                  </Link>
                </ListItem>
                <ListItem button onClick={handleDrawerToggle}>
                  <Link href='/personal-area/tutorials' style={{ padding: '10px', color: '#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
                    סרטונים
                  </Link>
                </ListItem>
                <ListItem button onClick={handleDrawerToggle}>
                  <Link href='/personal-area/community' style={{ padding: '10px', color: '#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
                    קהילה
                  </Link>
                </ListItem>
                <ListItem button onClick={handleDrawerToggle}>
                  <Link href='/personal-area/zoom' style={{ padding: '10px', color: '#00000' }} fontFamily={'Arial'} fontSize={17} color={'#000000'} underline={'none'}>
                    הזום השבועי
                  </Link>
                </ListItem>
              </List>
            </Drawer>
          </Grid>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumb />
          </Box>
          <Box sx={{ position: 'fixed', right: 0, top: 0, display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
            <Box sx={{ padding: "10px" }}>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <FontAwesomeIcon icon={faBell} color='black' />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ backgroundColor: '#27254C', color: 'white', width: "10vw", height: "10vh", display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: "100px" }}>
              <Typography variant="h6" noWrap height={"10vh"} sx={{ display: 'flex', alignItems: 'center' }}>
                <FontAwesomeIcon icon={faUserCircle} style={{ marginLeft: "5px" }} />
                {`היי ${userName}`}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }


export default Header;