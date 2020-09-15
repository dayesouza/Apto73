/* eslint-disable no-underscore-dangle */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function waterReducer(state = initialState.water, action) {
  switch (action.type) {
    case types.LOAD_WATER_SUCCESS:
      return action.water;
    case types.CREATE_WATER_SUCCESS:
      return [...state, { ...action.water }];
    case types.UPDATE_WATER_SUCCESS:
      return state.map((water) =>
        water._id === action.water._id ? action.water : water
      );
    case types.GET_WATER_BY_ID_SUCCESS:
      return state.find((s) => s._id === action.id);
    case types.DELETE_WATER_SUCCESS:
      return state.filter((water) => water._id !== action.water._id);
    default:
      return state;
  }
}