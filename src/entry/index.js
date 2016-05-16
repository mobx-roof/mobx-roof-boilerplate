import 'babel-polyfill';
import 'normalize.css';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import React from 'react';

import App from '../components/App';

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App} />
    </Router>,
  document.getElementById('root')
);
