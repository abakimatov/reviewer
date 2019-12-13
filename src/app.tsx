import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { firebase } from '@lib/firebase';
import { userChanged } from '@features/session';
import { GlobalStyles, theme } from '@theme';
import { Routes } from '@pages';

export const App: React.FC = () => {
  React.useEffect(() => {
    firebase.auth().onAuthStateChanged(userChanged);
  }, []);

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
};
