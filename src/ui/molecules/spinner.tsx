import * as React from 'react';

import { styled } from '@theme';
import { spinnerAnimation } from '../atoms';

export const Preloader: React.FC<{ primary: boolean }> = React.memo(({ primary }) => (
  <Root>
    <Spinner primary={primary}>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  </Root>
));

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Spinner = styled.div<{ primary: boolean }>`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 0;
    border: 2px solid
      ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.white)};
    border-radius: 50%;
    animation: ${spinnerAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ primary, theme }) => (primary ? theme.colors.primary : theme.colors.white)}
      transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
