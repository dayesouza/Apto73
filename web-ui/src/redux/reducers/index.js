import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import menuVisible from './menuVisibleReducer';
import aadResponse from './aadResponseReducer';
import waterList from './waterReducer';
import serviceWorker from './serviceWorkerReducer';
import residents from './residentsReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  menuVisible,
  aadResponse,
  waterList,
  serviceWorker,
  residents,
  user
});

export default rootReducer;
