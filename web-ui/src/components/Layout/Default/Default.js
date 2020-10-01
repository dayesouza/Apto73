import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import MainNavbar from '../MainNavbar/MainNavbar';
import MainSidebar from '../MainSidebar/MainSidebar';
import './Default.scss';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import * as menuVisibleActions from '../../../redux/actions/menuVisibleActions';

const DefaultLayout = ({ children, menuVisible, toggleMenu }) => {
  const shouldCloseMenu = () => {
    if (menuVisible) toggleMenu(menuVisible);
  };

  return (
    <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          onClick={() => shouldCloseMenu()}
          className="mainContent p-0"
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
};

function mapStateToProps(state) {
  const { menuVisible } = state;

  return {
    menuVisible,
  };
}

const mapDispatchToProps = {
  toggleMenu: menuVisibleActions.toggleMenuVisible,
};

DefaultLayout.propTypes = {
  /* eslint-disable-next-line react/forbid-prop-types */
  children: PropTypes.any.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
