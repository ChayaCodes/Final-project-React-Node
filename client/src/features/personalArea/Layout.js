import React from "react";
import {Outlet} from "react-router-dom";

import HeaderPesonelArea from "./Header";

const Layout = () => {
    return (
        <div className="page">
            <HeaderPesonelArea/>
            <Outlet/>
        </div>
    );
}
export default Layout;