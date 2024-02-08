import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./Header";
import { Box } from "@mui/material";
import SideBar from "./SideMenu";

const Layout = () => {
    return (
        <div className="page">
            <Header/>
            <Box sx={{display: "flex"}}>
            <SideBar/>
            <Outlet />
            </Box>
        </div>
    );
}
export default Layout;