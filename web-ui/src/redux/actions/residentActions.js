import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';
import residentsService from '../../api/residentsService';

export function loadResidentsSuccess(residents) {
  return {
    type: types.LOAD_RESIDENTS_SUCCESS,
    residents,
  };
}

export function updateResidentSuccess(resident) {
  return {
    type: types.UPDATE_RESIDENT_SUCCESS,
    resident,
  };
}

export function createResidentSuccess(resident) {
  return {
    type: types.CREATE_RESIDENT_SUCCESS,
    resident,
  };
}

export function saveResident(value) {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return await residentsService
      .save(value)
      .then((resident) => {
        value._id
          ? dispatch(updateResidentSuccess(resident))
          : dispatch(createResidentSuccess(resident));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadResidents() {
  return async function (dispatch) {
    dispatch(beginApiCall());
    return await residentsService
      .get()
      .then((residents) => {
        dispatch(loadResidentsSuccess(residents));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
