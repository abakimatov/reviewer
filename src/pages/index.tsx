import * as React from 'react';
import loadable from '@loadable/component';
import { Switch } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '@features/common';
import { routes } from '@features/constants';

const SignIn = loadable(() => import('./sign-in/page'));
const SignUp = loadable(() => import('./sign-up/page'));
const Teams = loadable(() => import('./teams/page'));

export const Routes = () => (
  <Switch>
    <PublicRoute exact path={routes.signIn} component={SignIn} />
    <PublicRoute exact path={routes.signUp} component={SignUp} />
    <PrivateRoute exact path={routes.teams} component={Teams} />
  </Switch>
);
