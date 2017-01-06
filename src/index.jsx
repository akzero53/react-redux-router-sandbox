import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Application from 'containers/Application';
import rootReducer from 'reducers/root';

const root = document.getElementById('root');

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  root
);
