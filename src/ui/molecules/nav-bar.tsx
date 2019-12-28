import * as React from 'react';

import { styled } from '@theme';
import { SNavLink } from '../atoms';

export const NavBar: React.FC = () => (
  <Root>
    <SNavLink to="/teams">Команды</SNavLink>
    <SNavLink exact to="/employees">
      Сотрудники
    </SNavLink>
    <SNavLink exact to="/skills">
      Навыки
    </SNavLink>
  </Root>
);

const Root = styled.nav`
  height: 100%;
  padding: 0 20px;
  display: flex;
`;
