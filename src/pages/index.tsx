import * as React from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';

const SignIn = loadable(() => import('./sign-in/page'));
const SignUp = loadable(() => import('./sign-up/page'));
const Home = loadable(() => import('./home/page'));

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/sign-up" exact component={SignUp} />
    <Route path="/home" exact component={Home} />
  </Switch>
);
