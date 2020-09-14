import React from 'react';

import moment from 'moment';
import { Card, CardBody, CardTitle } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function List({ waterList }) {
  return (
    <div>
      {waterList.map((water) => {
        return (
          <Card key={water._id} className="mb-2 waterCard">
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
