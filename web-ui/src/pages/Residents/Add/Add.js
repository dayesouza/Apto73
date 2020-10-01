import React, { useState, useEffect } from 'react';
import FormResident from './Form';
import Toastr from '../../../helpers/Toastr/Toastr';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as residentActions from '../../../redux/actions/residentActions';

function Add({ residents, loadResidents, saveResident, history, ...props }) {
  const [resident, setResident] = useState({ ...props.resident });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (residents.length === 0) {
      loadResidents().catch((_) => {
        alert('Loading residents failed');
      });
    } else {
      setResident({ ...props.resident });
    }
  }, []);

  function save(values) {
    console.log('va', values);
    saveResident(values)
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
  loading: PropTypes.bool.isRequired,
  residents: PropTypes.array.isRequired,
  loadResidents: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  saveResident: PropTypes.func.isRequired,
};

export function getResidentById(residents, id) {
  return residents.find((resident) => resident._id === id || null);
}

function mapStateToProps(state, ownProps) {
  const id = ownProps.match.params.id;
  const resident =
    id && state.residents.length > 0
      ? getResidentById(state.residents, id)
      : {};

  return {
    loading: state.apiCallsInProgress > 0,
    resident,
    residents: state.residents,
  };
}

const mapDispatchToProps = {
  saveResident: residentActions.saveResident,
  loadResidents: residentActions.loadResidents,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
