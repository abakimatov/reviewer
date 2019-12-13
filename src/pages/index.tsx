import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '@features/common';

const SignIn = loadable(() => import('./sign-in/page'));
const SignUp = loadable(() => import('./sign-up/page'));
const Home = loadable(() => import('./home/page'));

export const Routes = () => (
  <Switch>
    <PublicRoute path="/" exact component={SignIn} />
    <PublicRoute path="/sign-up" exact component={SignUp} />
    <PrivateRoute path="/home" exact component={Home} />
  </Switch>
);
