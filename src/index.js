import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import config from '../config';

import '../lib/css/normalize.css';

import App from './components/app';
import StartPage from './components/pages/startpage';
import NextPage from './components/pages/nextpage';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={StartPage} />
      <Route path="start" component={StartPage} />
      <Route path="next" component={NextPage} />
    </Route>
  </Router>
), document.getElementById(config.appMountId));
