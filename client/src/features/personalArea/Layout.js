import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./Header";
import { Box } from "@mui/material";
import SideBar from "./SideMenu";
import PersonalArea from "./PersonalArea";

const Layout = () => {
    return (
        <div className="page">
            <Header/>
            <Box sx={{display: "flex"}}>
            <SideBar/>
            <Box sx={{width: "100%", alignItems: "center", paddingTop: "60px"}}>
                <PersonalArea />
                <Outlet />
            </Box>
            </Box>
        </div>
    );
}
export default Layout;