/* eslint-disable no-underscore-dangle */
import * as types from './actionTypes';
import waterService from '../../api/waterService';
import { beginApiCall, apiCallError } from './apiStatusActions';

export function loadWaterSuccess(waterList) {
  return {
    type: types.LOAD_WATER_SUCCESS,
    waterList,
  };
}

export function createWaterSuccess(water) {
  return {
    type: types.CREATE_WATER_SUCCESS,
    water,
  };
}

export function updateWaterSuccess(water) {
  return {
    type: types.UPDATE_WATER_SUCCESS,
    water,
  };
}

export function deleteWaterSuccess(water) {
  return { type: types.DELETE_WATER_SUCCESS, water };
}

export function saveWater(value) {
  return async function save(dispatch) {
    dispatch(beginApiCall());
    try {
      const water = await waterService
      .save(value);
      value._id
      ? dispatch(updateWaterSuccess(water))
      : dispatch(createWaterSuccess(water));
      }
      catch (error) {
        dispatch(apiCallError(error));
        throw error;
      };
  };
}

export function deleteWater(water) {
  return async function (dispatch) {
    await dispatch(beginApiCall());
    return waterService
      .delete(water._id)
      .then((_) => {
        dispatch(deleteWaterSuccess(water));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadWater() {
  return async function get(dispatch) {
    dispatch(beginApiCall());
    try {
      const water = await waterService.get();
      dispatch(loadWaterSuccess(water));
    }
    catch(error) {
      dispatch(apiCallError(error));
      throw error;
    };
  };
}
