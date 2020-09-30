import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'shards-react';
import * as waterActions from '../../../redux/actions/waterActions';
import Form from './Form';
import Toastr from '../../../helpers/Toastr/Toastr';

function Add({ waterList, loadWaterList, saveWater, history, ...props }) {
  const [water, setWater] = useState({ ...props.water });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (waterList.length === 0) {
      loadWaterList().catch((_) => {
        alert('Loading water failed');
      });
    } else {
      setWater({ ...props.water });
    }
  }, [waterList]);

  function save(values) {
    values.date = new Date(values.date);
    saveWater(values)
      .then((_) => {
        Toastr.success('Saved successfully!');
        history.push('/water-gallons');
      })
      .catch((_) =>
        setErrors({ error: 'Undefined error. Please try again later.' })
      );
  }

  return (
    <>
      <h1>Add new water gallon</h1>

      {errors.length > 0 && (
        <Alert theme="danger">
          {errors.map((e) => (
            <p>{e}</p>
          ))}
        </Alert>
      )}
      <Form save={save} water={water} />
    </>
  );
}

Add.propTypes = {
  loading: PropTypes.bool.isRequired,
  waterList: PropTypes.array.isRequired,
  loadWaterList: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  saveWater: PropTypes.func.isRequired,
};

export function getWaterBySlug(waterList, slug) {
  return waterList.find((water) => water._id === slug || null);
}

function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.id;
  const water =
    slug && state.waterList.length > 0
      ? getWaterBySlug(state.waterList, slug)
      : {};

  return {
    loading: state.apiCallsInProgress > 0,
    water,
    waterList: state.waterList,
  };
}

const mapDispatchToProps = {
  saveWater: waterActions.saveWater,
  deleteWater: waterActions.deleteWater,
  loadWaterList: waterActions.loadWater,
};

export default connect(mapStateToProps, mapDispatchToProps)(Add);
