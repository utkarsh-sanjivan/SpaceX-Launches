import { reducer as launchListReducer } from "./LaunchList/reducers";
import { combineReducers } from 'redux';

export default (history) => combineReducers({
  launchList: launchListReducer,
});
