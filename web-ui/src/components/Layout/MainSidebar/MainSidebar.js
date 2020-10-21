import React from 'react';
import { Col } from 'shards-react';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import SidebarNavItems from './SidebarNavItems';
import './MainSidebar.scss';
import Rule from '../../Rule/Rule';

function MainSidebar({ menuVisible }) {
  const classes = classNames('mainSidebar', 'vh-100', 'col-12', {
    'mainSidebar--open': menuVisible,
  });

  return (
    <Col tag="aside" className={classes} lg={2} md={3}>
      <Rule />
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
