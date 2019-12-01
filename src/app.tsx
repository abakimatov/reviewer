import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { GlobalStyles, theme } from '@theme';
import { Routes } from '@pages';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>
);
