import React, { useState, useEffect } from 'react';
import FormResident from './Form';
import Toastr from '../../../helpers/Toastr/Toastr';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as residentActions from '../../../redux/actions/residentActions';

function Add({ history, ...props }) {
  const [resident, setResident] = useState({});
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  function save(values) {
    dispatch(residentActions.saveResident(values))
      .then((_) => {
        Toastr.success('Saved successfully!');
        history.push('/residents');
      })
      .catch((_) =>
        setErrors({ error: 'Undefined error. Please try again later.' })
      );
  }

  return (
    <>
      <h1>Add resident</h1>
      <FormResident save={save} resident={resident} />
    </>
  );
}

Add.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Add;
