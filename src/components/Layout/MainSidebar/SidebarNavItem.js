import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SidebarNavItem = ({ item }) => (
  <NavItem>
    <NavLink to={item.path}>
      <FontAwesomeIcon icon={item.icon} />
      <span className="ml-1">{item.name}</span>
    </NavLink>
  </NavItem>
);

SidebarNavItem.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default SidebarNavItem;
