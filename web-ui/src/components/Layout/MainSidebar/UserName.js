import React from 'react';
import PropTypes from 'prop-types';

function UserName({ name }) {
  return <div className="mt-2 text-center">{name}</div>;
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserName;
