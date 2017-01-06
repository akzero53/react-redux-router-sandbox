import { combineReducers } from 'redux';
import memoReducer from 'pages/memo/reducers/memo';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  memoReducer: memoReducer,
  routing: routerReducer,
});
