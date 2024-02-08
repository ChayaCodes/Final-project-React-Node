import React from "react";
import {Outlet} from "react-router-dom";

import HeaderPesonelArea from "./HeaderPersonalArea";

const LayoutPersonalArea = () => {
    return (
        <div className="page">
            <HeaderPesonelArea/>
            <Outlet/>
        </div>
    );
}
export default LayoutPersonalArea;