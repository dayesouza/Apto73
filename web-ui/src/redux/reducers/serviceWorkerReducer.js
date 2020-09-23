import * as types from '../actions/actionTypes';
import initialState from './initialState';

function serviceWorkerReducer(state = initialState.serviceWorker, action) {
  switch (action.type) {
    case types.SW_INIT:
      return {
        ...state,
        serviceWorkerInitialized: !state.serviceWorkerInitialized,
      };
    case types.SW_UPDATE:
      return {
        ...state,
        serviceWorkerUpdated: !state.serviceWorkerUpdated,
        serviceWorkerRegistration: action.payload,
      };
    default:
      return state;
  }
}

export default serviceWorkerReducer;
