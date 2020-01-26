import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { User } from 'firebase';

import { firebase } from '@lib/firebase';
import { userChanged } from '@features/session';
import {
  LoadingLayer,
  loadingStarted,
  loadingFinished
} from '@features/page-loading';
import { theme } from '@theme';
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
      <ThemeProvider theme={theme}>
        <LoadingLayer />
        {isReady && <Routes />}
      </ThemeProvider>
    </>
  );
};
