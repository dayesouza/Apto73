import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import MainNavbar from '../MainNavbar/MainNavbar';
import MainSidebar from '../MainSidebar/MainSidebar';
import './Default.scss';
import Footer from '../Footer/Footer';

const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <MainSidebar />
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        <MainNavbar />
        <Container fluid className="mt-2">
          {children}
        </Container>
        <Footer />
      </Col>
    </Row>
  </Container>
);

DefaultLayout.propTypes = {
  /* eslint-disable-next-line react/forbid-prop-types */
  children: PropTypes.any.isRequired,
};

export default DefaultLayout;
