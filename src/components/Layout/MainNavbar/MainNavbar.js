import React from 'react';
import { Container, Navbar } from 'shards-react';
import NavbarToggle from './NavbarToggle';
import './MainNavbar.scss';

const MainNavbar = () => (
  <div className="sticky-top main-navbar">
    <Container fluid className="p-0">
      <Navbar className="flex-md-nowrap p-0">
        <NavbarToggle icon="bars" />
        <div className="w-100 d-none p-1 d-md-flex d-lg-flex">
          <span class="app-name">Apto 73</span>
        </div>
      </Navbar>
    </Container>
  </div>
);

export default MainNavbar;
