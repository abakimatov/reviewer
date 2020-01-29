import * as React from 'react';
import { User } from 'firebase';

import { firebase } from '@lib/firebase';
import { userChanged } from '@features/session';
import {
  LoadingLayer,
  loadingStarted,
  loadingFinished
} from '@features/page-loading';
import { Routes } from '@pages';

export const App: React.FC = () => {
  const [isReady, setReady] = React.useState<boolean>(false);
  React.useEffect(() => {
    loadingStarted();
    firebase.auth().onAuthStateChanged((user: User | null): void => {
      userChanged(user);
      setReady(true);
      loadingFinished();
    });
  }, []);

  return (
    <>
      <LoadingLayer />
      {isReady && <Routes />}
    </>
  );
};
