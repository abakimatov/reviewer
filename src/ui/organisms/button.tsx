import * as React from 'react';
import { Button as KitButton } from 'reakit';

import { styled } from '@theme';
import { Preloader } from '../molecules';

type Props = {
  handler: (event: React.SyntheticEvent) => void;
  loading?: boolean;
  primary?: boolean;
  disabled?: boolean;
  children?: React.ReactChild;
  type?: 'submit' | 'button' | 'reset';
};

type SProps = {
  primary?: boolean;
  disabled?: boolean;
};

export const Button: React.FC<Props> = React.memo(
  ({ loading, primary, disabled, children, type, handler }) => (
    <Root type={type} disabled={disabled} onClick={handler} primary={primary}>
      {loading ? <Preloader primary={!primary} /> : children}
    </Root>
  )
);

const Root = styled(KitButton)<SProps>`
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: none;
  transition: box-shadow 0.2s;

  color: ${({ theme, primary }) => (primary ? theme.colors.white : theme.colors.primary)};
  border: 2px solid ${({ theme, primary }) => (primary ? 'transparent' : theme.colors.primary)};
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.primary : theme.colors.white};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  :hover {
    box-shadow: 0px 10px 15px -10px ${({ theme }) => theme.colors.primary};
  }
`;
