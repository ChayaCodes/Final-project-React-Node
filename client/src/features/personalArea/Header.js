import React, { useEffect } from 'react';
import { Typography, IconButton, Link, Toolbar, Box } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { useGetUserQuery } from '../../store/user/userApiSlice';




const Header = () => {
    const{data: user, isLoading, isError, isSuccess, error} = useGetUserQuery();

    if(isLoading){
        console.log("loading");
        return <div>Loading...</div>
    }
    if(isError){
        <div>
        return <div style={{color: "red"}}>{error.data}</div>
        </div>
    }
    if(isSuccess){
    const userName = user.userName;
    
    return (
        <Toolbar position="static" style={{
            backgroundColor: 'white', color: 'black',
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "0",
            alignItems: "center"
        }}>
            <Typography variant="h6" style={{ flexGrow: 0 }}> LOGO </Typography>


            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">ראשי</Link>/
                <Link underline="hover" color="inherit" href="/personal-area">איזור אישי</Link>
            </Breadcrumbs>
            <Box style={{ flexGrow: 0 }}>
                <IconButton edge="start" color="black" aria-label="menu"><FontAwesomeIcon icon={faBell} /></IconButton>

                <IconButton edge="start" color="black" aria-label="menu">{`היי, ${userName}`}</IconButton>
            </Box>
        </Toolbar>
    );}
};

export default Header;