import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ header }) => {
  return <h1>{header}</h1>;
};

PageHeader.propTypes = {
  header: PropTypes.string.isRequired,
};

export default PageHeader;
