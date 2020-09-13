import React from 'react';

import moment from 'moment';
import { Card, CardBody } from 'shards-react';

export default function List({ waterList }) {
  return (
    <div>
      {waterList.map((water) => {
        return (
          <Card key={water._id} className="mb-2">
            <CardBody>
              {water.user} -{water.value} -{' '}
              {moment(water.date).format('DD/MM/y')}
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}
