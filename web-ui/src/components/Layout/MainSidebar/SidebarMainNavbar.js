import React from 'react';
import { Navbar } from 'shards-react';
import NavbarToggle from '../MainNavbar/NavbarToggle';

function SidebarMainNavbar() {
  return (
    <div className="sidebarMain__navbar">
      <Navbar className="align-items-stretch bg-white flex-md-nowrap p-0">
        <NavbarToggle icon="angle-double-left" />
        <span className="mt-2 d-sm-inline d-md-inline d-lg-none">Apto73</span>
      </Navbar>
    </div>
  );
}

export default SidebarMainNavbar;
