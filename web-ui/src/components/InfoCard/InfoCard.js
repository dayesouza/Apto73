import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'shards-react';
import './InfoCard.scss';

export default function InfoCard({ title, value }) {
  return (
    <Card className="infoCard">
      <CardBody>
        <div className="d-flex justify-content-between">
          <span className="text-primary font-weight-bold">{title}</span>
          <span>{value}</span>
        </div>
      </CardBody>
    </Card>
  );
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
