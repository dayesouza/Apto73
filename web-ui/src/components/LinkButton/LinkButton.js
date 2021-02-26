import React from 'react';
import { Button } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkButton({ name, icon, link }) {
  return (
    <Link to={link}>
      <Button>
        <FontAwesomeIcon icon={icon} /> {name}
      </Button>
    </Link>
  );
}

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default LinkButton;
