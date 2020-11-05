import * as types from './actionTypes';

export function retrieveAuthenticatedUser() {
  return { type: types.GET_LOGGED_USER };
}

export function saveAuthenticatedUser(user) {
  return { type: types.SAVE_LOGGED_USER, payload: user };
}
