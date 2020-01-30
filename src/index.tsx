import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { history } from '@lib/routing';
import '@theme/index.less';
import '@theme/global.pcss';
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
