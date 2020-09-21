import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import WaterGallons from './pages/WaterGallons/WaterGallons';
import WaterAdd from './pages/WaterGallons/Add/Add';
import Residents from './pages/Residents/Residents';

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
    path: '/water-gallon/:id',
    component: WaterAdd,
  },
  {
    path: '/water-gallon',
    component: WaterAdd,
  },
  {
    path: '/water-gallons',
    component: WaterGallons,
    name: 'Water Gallons',
    sidemenu: true,
    icon: 'tint',
  },
  {
    path: '/residents',
    component: Residents,
    name: 'Residents',
    sidemenu: true,
    icon: 'users',
  },
  {
    path: '**',
    component: NotFound,
    sidemenu: false,
  },
];
