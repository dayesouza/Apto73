import { combineReducers } from 'redux';
import apiCallsInProgress from './apiStatusReducer';
import menuVisible from './menuVisibleReducer';
import aadResponse from './aadResponseReducer';
import waterList from './waterReducer';
import serviceWorker from './serviceWorkerReducer';
import residents from './residentsReducer';

const rootReducer = combineReducers({
  apiCallsInProgress,
  menuVisible,
  aadResponse,
  waterList,
  serviceWorker,
  residents,
});

export default rootReducer;
