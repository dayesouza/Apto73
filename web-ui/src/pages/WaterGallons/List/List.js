import React from 'react';

import moment from 'moment';
import { Card, CardBody, CardTitle } from 'shards-react';
import './List.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function List({ waterList, history }) {
  return (
    <div>
      {waterList.map((water) => {
        return (
          <Card
            key={water._id}
            onClick={() => history.push(`/water-gallon/${water._id}`)}
            className="mb-2 waterCard"
          >
            <CardBody>
              <CardTitle className="d-flex justify-content-between">
                <span>{moment(water.date).format('DD/MM/y')} </span>
                <span>{water.user}</span>
              </CardTitle>
              <span>R${water.value}</span>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

List.propTypes = {
  waterList: PropTypes.array.isRequired,
};

export default withRouter(List);
