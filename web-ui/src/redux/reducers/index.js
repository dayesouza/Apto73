import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import menuVisible from './menuVisibleReducer';
import aadResponse from './aadResponseReducer';
import water from './waterReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  menuVisible,
  aadResponse,
  water,
});

export default rootReducer;
