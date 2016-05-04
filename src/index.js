import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config';

import '../lib/css/normalize.css';

import App from './app';

ReactDOM.render(<App />, document.getElementById(config.appMountId));
