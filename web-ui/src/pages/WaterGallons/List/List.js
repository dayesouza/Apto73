import React from 'react';

import './List.scss';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import ListItem from './ListItem';

function List({ waterList, deleteWater }) {
  const history = useHistory();
  return (
    <>
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
    </>
  );
}

List.propTypes = {
  waterList: PropTypes.array.isRequired,
  deleteWater: PropTypes.func.isRequired,
};

export default List;
