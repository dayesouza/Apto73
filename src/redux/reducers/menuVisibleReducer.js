import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function menuVisibleReducer(
  state = initialState.menuVisible,
  action
) {
  switch (action.type) {
    case types.TOGGLE_MENU_VISIBLE:
      return !state;
    default:
      return state;
  }
}
