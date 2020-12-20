import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

function BackButton() {
  const history = useHistory();

  return (
    <nav className="nav">
      <button
        type="button"
        aria-label="Toggle Menu"
        onClick={() => history.goBack()}
        className="nav-link btn btn-link nav-link-icon d-sm-inline d-md-none d-lg-none"
      >
        <FontAwesomeIcon icon="chevron-left" />
      </button>
    </nav>
  );
}

export default BackButton;
