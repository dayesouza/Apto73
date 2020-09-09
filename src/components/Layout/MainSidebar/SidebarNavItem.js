import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { connect } from 'react-redux';
import * as menuVisibleActions from '../../../redux/actions/menuVisibleActions';

function SidebarNavItem({ item, toggleMenu }) {
  function handleChange() {
    toggleMenu();
  }

  return (
    <NavLink
      onClick={handleChange}
      to={item.path}
      className="sidebarMain__navItem"
      activeClassName="sidebarMain__navItem--selected"
    >
      <FontAwesomeIcon icon={item.icon} />
      <span className="ml-1">{item.name}</span>
    </NavLink>
  );
}

SidebarNavItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  toggleMenu: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNavItem);
