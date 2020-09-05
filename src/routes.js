import React from 'react';
import { Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

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
    path: '**',
    component: NotFound,
    sidemenu: false,
  },
];
