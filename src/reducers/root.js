import { combineReducers } from 'redux';
import logReducer from 'reducers/log';
import memoReducer from 'reducers/memo';

const rootReducer = combineReducers({
  logReducer: logReducer,
  memoReducer: memoReducer,
});

export default rootReducer;
