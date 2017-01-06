import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import Routes from 'Routes';
import reducer from 'reducer';

const store = createStore(reducer, applyMiddleware(routerMiddleware(hashHistory)));

ReactDOM.render((
    <Provider store={store}>
      <Routes store={store} />
    </Provider>
  ),
  document.getElementById('root')
);
