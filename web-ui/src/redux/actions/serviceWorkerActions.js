import * as types from './actionTypes';

export function serviceWorkerInit() {
  return { type: types.SW_INIT };
}

export function serviceWorkerUpdate(registration) {
  return { type: types.SW_UPDATE, registration };
}
