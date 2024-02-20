import React from "react";
import {Outlet} from "react-router-dom";

import Header from "../../../features/personalArea/Header";
import { Box } from "@mui/material";
import PersonalArea from "../../../features/personalArea/PersonalArea";

const Layout = () => {
    return (
        <div className="page">
            <Header/>
            <Box sx={{display: "flex"}}>
            <Box sx={{width: "100%", alignItems: "center"}}>
                <PersonalArea />
                <Outlet />
            </Box>
            </Box>
        </div>
    );
}
export default Layout;