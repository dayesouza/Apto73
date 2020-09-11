import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import menuVisible from './menuVisibleReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  menuVisible,
});

export default rootReducer;
