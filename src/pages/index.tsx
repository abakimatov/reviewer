import * as React from 'react';
import loadable from '@loadable/component';
import { Switch } from 'react-router-dom';

import { PrivateRoute, PublicRoute } from '@features/common';
import { routes } from '@lib/constants';

const SignIn = loadable(() => import('./sign-in/page'));
const SignUp = loadable(() => import('./sign-up/page'));
const Teams = loadable(() => import('./teams/page'));
const NewTeam = loadable(() => import('./teams/new/page'));
const Skills = loadable(() => import('./skills/page'));

export const Routes = () => (
  <Switch>
    <PublicRoute exact path={routes.signIn} component={SignIn} />
    <PublicRoute exact path={routes.signUp} component={SignUp} />
    <PrivateRoute exact path={routes.teams} component={Teams} />
    <PrivateRoute exact path={routes.newTeam} component={NewTeam} />
    <PrivateRoute exact path={routes.skills} component={Skills} />
  </Switch>
);
