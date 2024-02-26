import './sideBar.css'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdPendingActions,
  MdOutlineSettings,
  MdHelpCenter,
  MdOutlineBusinessCenter,
  MdLogout,
  MdOutlineForum

} from 'react-icons/md'
import { FaBook } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


const SideBar = () => {

  const menuItems = {
    title: 'דפים',
    list: [
      {
        title: 'ראשי',
        path: '/dash',
        icon: <MdDashboard />
      },
      {
        title: 'משתמשים',
        path: '/dash/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'פורומים',
        path: '/dash/forums',
        icon: <FaBook />
      },
      {
        title: 'נושאים',
        path: '/dash/treads',
        icon: <IoIosDocument />
      },
      {
        title: 'הודעות',
        path: '/dash/messages',
        icon: <MdOutlineForum />
      },

    ]
  }


  return (
    <div className='side-bar'>
      <div className='side-bar-user'>
        <img src={user.avatar || './no-avatar.png'} alt='user-avatar' className='side-bar-user-avatar' />
      </div>
      <div className='side-bar-menu'>
        
      </div>
    </div>
  )
}

export default SideBar