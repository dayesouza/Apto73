import React from 'react';
import PropTypes from 'prop-types';
import UserPhoto from './UserPhoto';
import UserName from './UserName';

function UserInfo({user}) {
  return (
    <div>
      <UserPhoto />
      <UserName name={user?.name} />
    </div>
  );
}

UserInfo.propTypes = {
  user: PropTypes.object
};

UserInfo.defaultProps = {
  user: {name: '-'}
};

export default UserInfo;
