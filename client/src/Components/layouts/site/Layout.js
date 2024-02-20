import React from "react";
import {Outlet} from "react-router-dom";

import Header from "../../../features/main/Header";
import Footer from "../../../features/main/Footer";
import MyComponent from "../../../MyComponent"

const Layout = () => {
    return (
        <div className="page">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}
export default Layout;