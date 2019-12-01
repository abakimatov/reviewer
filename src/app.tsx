import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from '@theme';
import { Routes } from '@pages';

export const App: React.FC = () => (
  <>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>
);
