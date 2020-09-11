import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function aadResponseReducer(
  state = initialState.aadResponse,
  action
) {
  switch (action.type) {
    case types.AAD_LOGIN_SUCCESS:
      return { ...state, aadResponse: action.payload };
    case types.AAD_LOGOUT_SUCCESS:
      return { ...state, aadResponse: null };
    default:
      return state;
  }
}
