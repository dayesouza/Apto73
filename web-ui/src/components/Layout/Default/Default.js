import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'shards-react';

import MainNavbar from '../MainNavbar/MainNavbar';
import MainSidebar from '../MainSidebar/MainSidebar';
import './Default.scss';
import Footer from '../Footer/Footer';

import { connect } from 'react-redux';
import * as menuVisibleActions from '../../../redux/actions/menuVisibleActions';
import * as userActions from '../../../redux/actions/userActions';

const DefaultLayout = ({ children, menuVisible, toggleMenu, auth, saveAuthenticatedUser}) => {
  
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    if (auth) saveAuthenticatedUser(auth.user);
  }, [auth]);

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
          <Container fluid className="my-2">
            {children}
          </Container>
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  const { menuVisible, user } = state;

  return {
    menuVisible,
    user
  };
}

const mapDispatchToProps = {
  toggleMenu: menuVisibleActions.toggleMenuVisible,
  saveAuthenticatedUser: userActions.saveAuthenticatedUser,
};

DefaultLayout.propTypes = {
  /* eslint-disable-next-line react/forbid-prop-types */
  children: PropTypes.any.isRequired,
  menuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  saveAuthenticatedUser: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
  auth: PropTypes.object,
};

DefaultLayout.defaultProps = {
  auth: {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);
