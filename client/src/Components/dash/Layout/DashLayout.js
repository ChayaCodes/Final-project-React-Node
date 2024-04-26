import React from 'react';
import '../dash.css';
import './dash-layout.css';
import { Outlet } from 'react-router';
import NavBar from '../navBar/NavBar';
import Footer from '../Footer/Footer';
import SideBar from '../sideBar/SideBar';

function DashLayout() {
  return (
    <div className="continer dash-container " style={{backgroundColor: '#151c2c', color: 'white' }}>
      <div className="menu">
        <SideBar />
      </div>
      <div className="content">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default DashLayout;
