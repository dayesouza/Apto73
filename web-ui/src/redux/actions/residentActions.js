import * as types from './actionTypes';
import { beginApiCall, apiCallError } from './apiStatusActions';
import residentsService from '../../api/residentsService';

export function loadResidentsSuccess(residents) {
  return {
    type: types.LOAD_RESIDENTS_SUCCESS,
    residents,
  };
}

export function createResidentSuccess(resident) {
  return {
    type: types.CREATE_RESIDENT_SUCCESS,
    resident,
  };
}

export function saveResident(value) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return residentsService
      .save(value)
      .then((resident) => {
        // value._id
        // ? dispatch(updateWaterSuccess(water))
        // :
        dispatch(createResidentSuccess(resident));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadResidents() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return residentsService
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
