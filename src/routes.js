import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import WaterGallons from './pages/WaterGallons/WaterGallons';

export default [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home" />,
  },
  {
    path: '/home',
    component: Home,
    name: 'Home',
    sidemenu: true,
    icon: 'tachometer-alt',
  },
  {
    path: '/water-gallons',
    component: WaterGallons,
    name: 'Water Gallons',
    sidemenu: true,
    icon: 'tachometer-alt',
  },
  {
    path: '**',
    component: NotFound,
    sidemenu: false,
  },
];
