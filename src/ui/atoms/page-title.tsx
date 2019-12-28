import * as React from 'react';

import { styled } from '@theme';

interface Props {
  readonly children: React.ReactNode;
}

export const PageTitle: React.FC<Props> = ({ children }) => (
  <Text>{children}</Text>
);

const Text = styled.h3`
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes[6]}px;
`;
