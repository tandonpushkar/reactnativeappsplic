import { combineReducers } from "redux";

import loader from "./loader";
import inputs from './inputs';


const appReducer = combineReducers({
  loader,
  inputs
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;
