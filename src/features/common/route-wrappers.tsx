import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useStore } from 'effector-react';

import { $user } from '@features/session';

export const PrivateRoute: React.FC<any> = ({
  component: Component,
  ...ownProps
}) => {
  const user = useStore($user);

  return user ? (
    <Route {...ownProps} component={Component} />
  ) : (
    <Redirect to="/" />
  );
};

export const PublicRoute: React.FC<any> = ({
  component: Component,
  ...ownProps
}) => {
  const user = useStore($user);

  return user ? (
    <Redirect to="/home" />
  ) : (
    <Route {...ownProps} component={Component} />
  );
};
