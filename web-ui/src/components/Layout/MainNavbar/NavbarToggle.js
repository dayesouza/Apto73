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
        aria-label="Toggle Menu"
        onClick={handleClick}
        className="nav-link btn btn-link nav-link-icon d-sm-inline d-md-inline d-lg-none"
      >
        <FontAwesomeIcon icon={icon} />
      </button>
    </nav>
  );
}

NavbarToggle.propTypes = {
  menuVisible: PropTypes.bool,
  toggleMenu: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
};

NavbarToggle.defaultProps = {
  menuVisible: false,
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
