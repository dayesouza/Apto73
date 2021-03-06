import React, { useEffect } from 'react';
import { Col } from 'shards-react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarNavItems from './SidebarNavItems';
import './MainSidebar.scss';
import Rule from '../../Rule/Rule';
import UserInfo from './UserInfo';

function MainSidebar({ menuVisible, user }) {


  const classes = classNames('mainSidebar', 'vh-100', 'p-0', 'col-12', {
    'mainSidebar--open': menuVisible,
  });

  return (
    <Col tag="aside" className={classes} lg={2} md={3}>
      <UserInfo user={user} />
      <Rule />
      <SidebarNavItems />
    </Col>
  );
}

MainSidebar.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { menuVisible, user } = state;

  return {
    menuVisible,
    user
  };
}

export default connect(mapStateToProps)(MainSidebar);
