import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import { Row, Col } from 'shards-react';

export default function List({ residents }) {
  return (
    <Row>
      {residents.map((r) => {
        return (
          <Col md={6} sm={12} key={r._id} className="mt-2">
            <Item resident={r} />
          </Col>
        );
      })}
    </Row>
  );
}

List.propTypes = {
  residents: PropTypes.array.isRequired,
};
