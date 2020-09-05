import React from 'react';
import { Col } from 'shards-react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import SidebarMainNavbar from './SidebarMainNavbar';
import SidebarNavItems from './SidebarNavItems';
import './MainSidebar.scss';

function MainSidebar({ menuVisible }) {
  return (
    <Col
      tag="aside"
      className={
        menuVisible
          ? 'main-sidebar open vh-100 col-12'
          : 'main-sidebar vh-100 col-12'
      }
      lg={2}
      md={3}
    >
      <SidebarMainNavbar />
      <SidebarNavItems />
    </Col>
  );
}

MainSidebar.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { menuVisible } = state;

  return {
    menuVisible,
  };
}

export default connect(mapStateToProps)(MainSidebar);
