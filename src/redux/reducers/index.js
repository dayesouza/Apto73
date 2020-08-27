import { combineReducers } from "redux";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  apiCallsInProgress
});

export default rootReducer;
