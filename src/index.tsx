import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import { history } from '@lib/routing';
import { App } from './app';

const root = document.getElementById('root');

const render = () => {
  if (root) {
    ReactDOM.render(
      <Router history={history}>
        <App />
      </Router>,
      root
    );
  }
};

if (module.hot) {
  module.hot.accept('./app', render);
}

render();
