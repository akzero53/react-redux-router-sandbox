import React from 'react';
import { Router, IndexRoute, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Layout from 'common/components/Layout';
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
        <Route path='/' component={ Layout }>
          <IndexRoute component={ LandingPage } />
          <Route path='counter' component={ Counter } />
          <Route path='memo' component={ Memo } />
        </Route>
      </Router>
    );
  }
}
