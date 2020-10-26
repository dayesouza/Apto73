import React from 'react';
import PropTypes from 'prop-types';
import UserPhoto from './UserPhoto';
import UserName from './UserName';

function UserInfo(props) {
  return (
    <div>
      <UserPhoto />
      <UserName name="Day" />
    </div>
  );
}

UserInfo.propTypes = {};

export default UserInfo;
