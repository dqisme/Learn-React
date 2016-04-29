import React from 'react';
import ReactDOM from 'react-dom';
import config from '../config/config';

function App() {
  return (
    <p>
      Hello, World. Nice to meet you twenty-third!
    </p>
  );
}

ReactDOM.render(<App />, document.getElementById(config.appMountId));

