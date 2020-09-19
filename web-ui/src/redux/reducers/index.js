import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import menuVisible from './menuVisibleReducer';
import aadResponse from './aadResponseReducer';
import waterList from './waterReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  menuVisible,
  aadResponse,
  waterList,
});

export default rootReducer;
