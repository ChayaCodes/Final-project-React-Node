import { Breadcrumbs } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router-dom';

const routes = [
  { path: 'personal-area', breadcrumb: 'איזור אישי' },
  { path: 'courses', breadcrumb: 'קורסים' },
  { path: 'tutorials', breadcrumb: 'הדרכות' },
  { path: 'community', breadcrumb: 'קהילה' },
  { path: 'zoom', breadcrumb: 'הזום השבועי' },
  { path: 'edit', breadcrumb: 'עריכת פרטים אישיים' },
  { path: 'profile', breadcrumb: 'פרופיל' },

];

const Crumbs = () => {
  const location = window.location.href;
  console.log(location);

  const paths = location.split('/')
  const filteredRoutes = routes.filter(route => paths.includes(route.path));
  filteredRoutes.unshift({ path: '/', breadcrumb: 'ראשי' });
  return (
    <Breadcrumbs separator="/">
      {
        filteredRoutes.map((route, index) => {
          
          return (
            <NavLink key={index} to={route.path} style={{ textDecoration: 'none' }}>
              <div >{route.breadcrumb}</div>
            </NavLink>
          );
        })
      }
    </Breadcrumbs>
  );
};

export default Crumbs;