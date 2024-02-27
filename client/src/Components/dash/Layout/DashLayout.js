import React from 'react'
import '../dash.css';
import './dash-layout.css'
import NavBar from '../navBar/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Footer/Footer'
import SideBar from '../sideBar/SideBar'

const DashLayout = () => {
  return (
    
    <div className='continer dash-container ' >
      <div className='menu'>
        <SideBar />
      </div>
      <div className='content'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

export default DashLayout