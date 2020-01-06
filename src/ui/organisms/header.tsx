import * as React from 'react';

import { HeaderAccountActions } from '@features/session';
import { styled } from '@theme';
import { Logo, NavBar } from '../molecules';

export const Header: React.FC = () => (
  <Root>
    <Logo size="middle" />
    <NavBar />
    <HeaderAccountActions />
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
`;
