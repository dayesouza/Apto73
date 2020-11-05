import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case types.GET_LOGGED_USER:
      return state;
    case types.SAVE_LOGGED_USER:
      return action.payload;
    default:
      return state;
  }
}
