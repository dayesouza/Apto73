/* eslint-disable no-underscore-dangle */
import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function residentsReducer(
  state = initialState.residents,
  action
) {
  switch (action.type) {
    case types.LOAD_RESIDENTS_SUCCESS:
      return action.residents;
    case types.CREATE_RESIDENT_SUCCESS:
      return [...state, { ...action.residents }];
    // case types.UPDATE_WATER_SUCCESS:
    //   return state.map((water) =>
    //     water._id === action.water._id ? action.water : water
    //   );
    // case types.DELETE_WATER_SUCCESS:
    //   return state.filter((water) => water._id !== action.water._id);
    default:
      return state;
  }
}
