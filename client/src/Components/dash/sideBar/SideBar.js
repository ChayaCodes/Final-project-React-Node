import './sideBar.css';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdPendingActions,
  MdOutlineSettings,
  MdHelpCenter,
  MdOutlineBusinessCenter,
  MdLogout,
  MdOutlineForum,

} from 'react-icons/md';
import { FaBook } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MenuLink from './MenuLink';

function SideBar() {
  const menuItems = [{
    title: 'דפים',
    list: [
      {
        title: 'ראשי',
        path: '/dash',
        icon: <MdDashboard />,
      },
      {
        title: 'משתמשים',
        path: '/dash/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'פורומים',
        path: '/dash/forums',
        icon: <FaBook />,
      },
      {
        title: 'נושאים',
        path: '/dash/threads',
        icon: <IoIosDocument />,
      },
      {
        title: 'הודעות',
        path: '/dash/messages',
        icon: <MdOutlineForum />,
      },

    ],
  },
  ];

  const user = {
    _id: '65bcc1eb268e000242c71c29',
    firstName: 'itschak',
    lastName: 'polikman',
    email: 'itschak123@gmail.com',
    password: '$2b$10$pFnJ6WgyWu6NW6BljXc8k.RIYCqTdCiNCyJ.SnEeVgf0aV3AblH6S',
    userName: 'מנהל',
    role: 'admin',
    avatar: 'https://ui-avatars.com/api/?name=מנהל&length=1&rounded=true&bold=true&background=random',
    forums: [],
    updatedAt: '2024-02-26T16:10:27.405Z',
  };

  return (
    <div className="side-bar">
      <div className="side-bar-user">
        <img src={user.avatar} alt="user-avatar" className="side-bar-user-avatar" width="50" height="50" />
        <div className="side-bar-user-username">
          <span>{user.userName}</span>

        </div>
      </div>
      <div className="side-bar-menu">
        <ul className="side-bar-menu-list">

          {menuItems.map((category) => (
            <li key={category.title} className="side-bar-menu-list-item">
              <span className="side-bar-menu-cat">{category.title}</span>
              {
                category.list.map((item) => (
                  <MenuLink item={item} key={item.title} />

                ))
              }
            </li>
          ))}
        </ul>
        <button className="side-bar-logout">
          <MdLogout />
          יציאה
        </button>
      </div>
    </div>
  );
}

export default SideBar;
