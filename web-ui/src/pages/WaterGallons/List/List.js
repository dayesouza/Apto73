import React from 'react';

import './List.scss';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ListItem from './ListItem';

function List({ waterList, history, deleteWater }) {
  return (
    <div>
      {waterList.map((water) => {
        return (
          <ListItem
            key={water._id}
            water={water}
            history={history}
            deleteWater={deleteWater}
          />
        );
      })}
    </div>
  );
}

List.propTypes = {
  waterList: PropTypes.array.isRequired,
  deleteWater: PropTypes.func.isRequired,
};

export default withRouter(List);
