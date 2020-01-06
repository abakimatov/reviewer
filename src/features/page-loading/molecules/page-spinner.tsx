import * as React from 'react';

import { styled } from '@theme';
import { Preloader } from '@ui';

export const PageSpinner: React.FC = () => (
  <Root>
    <Preloader variant="ghost" size="large" />
  </Root>
);

const Root = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  background-color: rgba(112, 111, 111, 0.4);
`;
