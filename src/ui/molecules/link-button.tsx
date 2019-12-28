import * as React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@theme';

interface Props {
  readonly to: string;
  readonly children: React.ReactNode;
}

export const LinkButton: React.FC<Props> = ({ children, to }) => (
  <Button to={to}>{children}</Button>
);

const Button = styled(Link)`
  padding: 7px 15px;
  border-radius: 20px;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.light};
  background-color: ${({ theme }) => theme.colors.primary};
`;
