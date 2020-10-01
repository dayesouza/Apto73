import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ resident }) {
  return <h1>{resident.name}</h1>;
}

Item.propTypes = {
  residents: PropTypes.object.isRequired,
};
