import * as React from 'react';

import { styled } from '@theme';

export const TopBar: React.FC<React.ReactNode> = ({
  children
}): JSX.Element => <Root>{children}</Root>;

const Root = styled.section`
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
