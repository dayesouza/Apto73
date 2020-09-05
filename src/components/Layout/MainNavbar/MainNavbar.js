import React from 'react';
import { Container, Navbar } from 'shards-react';

import NavbarToggle from './NavbarToggle';

const MainNavbar = () => (
  <div className="sticky-top bg-white main-navbar">
    <Container fluid className="p-0">
      <Navbar className="flex-md-nowrap p-0">
        <NavbarToggle icon="bars" />
        <div className="w-100 d-none d-md-flex d-lg-flex">
          <p>Apto 73</p>
        </div>
      </Navbar>
    </Container>
  </div>
);

export default MainNavbar;
