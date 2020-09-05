import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as menuVisibleActions from '../../../redux/actions/menuVisibleActions';

function NavbarToggle({ toggleMenu, menuVisible, icon }) {
  function handleClick() {
    toggleMenu(menuVisible);
  }

  return (
    <nav className="nav">
      <button
        type="button"
        onClick={handleClick}
        className="nav-link btn btn-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none"
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </nav>
  );
}

NavbarToggle.propTypes = {
  menuVisible: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarToggle);
