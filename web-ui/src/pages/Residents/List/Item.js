import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Item({ resident }) {
  const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
  };

  return (
    <Card>
      <CardBody>
        <h3>
          <FontAwesomeIcon className="mr-1" icon="user" />
          {resident.name}
        </h3>
        <span>
          <FontAwesomeIcon className="mr-1" icon="calendar" />
          {formatDate(resident.birthday)}
        </span>
      </CardBody>
    </Card>
  );
}

Item.propTypes = {
  resident: PropTypes.object.isRequired,
};
