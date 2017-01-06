import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import LandingPage from 'pages/landing-page/Container';
import Memo from 'pages/memo/Container';
import Counter from 'pages/counter/Container';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this._history = syncHistoryWithStore(hashHistory, props.store);
  }

  render() {
    return (
      <Router history={this._history}>
        <Route path='/' component={ LandingPage } />
        <Route path='/counter' component={ Counter } />
        <Route path='/memo' component={ Memo } />
      </Router>
    );
  }
}
