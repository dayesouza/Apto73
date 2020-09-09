import React from 'react';
import { Navbar } from 'shards-react';
import NavbarToggle from '../MainNavbar/NavbarToggle';

function SidebarMainNavbar() {
  return (
    <div className="sidebarMain__navbar">
      <Navbar className="align-items-stretch bg-white flex-md-nowrap border-bottom p-0">
        <NavbarToggle icon="angle-double-left" />
      </Navbar>
    </div>
  );
}

export default SidebarMainNavbar;
