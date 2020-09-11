import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
  return (
    type.substring(type.length - 8) === '_SUCCESS' &&
    type.substring(type.length - 13) !== 'TOKEN_SUCCESS'
  );
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgess,
  action
) {
  if (
    action.type === types.BEGGIN_API_CALL ||
    action.type === types.AAD_INITIALIZING
  ) {
    return state + 1;
  }
  if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
