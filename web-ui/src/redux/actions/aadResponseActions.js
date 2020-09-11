import * as types from './actionTypes';

export function loginSuccess() {
  return { type: types.AAD_LOGIN_SUCCESS };
}

export function logouSuccess() {
  return { type: types.AAD_LOGOUT_SUCCESS };
}
