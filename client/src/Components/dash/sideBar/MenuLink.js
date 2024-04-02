import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLink(payload) {
  return (
    <NavLink to={payload.item.path} className="side-bar-menu-link" exact>
      {payload.item.icon}
      {payload.item.title}
    </NavLink>
  );
}

export default MenuLink;
