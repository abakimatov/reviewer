import * as React from 'react';
import { Button as KitButton } from 'reakit';

import { styled } from '@theme';
import { Preloader } from '../molecules';

interface Props {
  readonly handler: (event: React.SyntheticEvent) => void;
  readonly loading?: boolean;
  readonly disabled?: boolean;
  readonly children?: React.ReactChild;
  readonly type?: 'submit' | 'button' | 'reset';
  readonly variant?: 'primary' | 'ghost';
}

interface SProps {
  readonly variant?: 'primary' | 'ghost';
}

export const Button: React.FC<Props> = React.memo(
  ({ loading, variant, disabled, children, type, handler }: Props) => (
    <Root type={type} disabled={disabled} onClick={handler} variant={variant}>
      {loading ? <Preloader variant={variant} size="middle" /> : children}
    </Root>
  )
);

const Root = styled(KitButton).attrs(({ variant }: Props) => ({
  'data-variant': variant || 'ghost'
}))<SProps>`
  width: 100%;
  padding: 10px 20px;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: none;
  transition: box-shadow 0.2s, opacity 0.05s;
  cursor: pointer;
  text-align: center;

  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  &[data-variant='primary'] {
    color: ${({ theme }) => theme.colors.light};
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &[data-variant='ghost'] {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.background};
  }

  :hover {
    box-shadow: 0px 10px 15px -10px ${({ theme }) => theme.colors.black};
  }
  :active {
    &[data-variant='primary'] {
      background-color: ${({ theme }) => theme.colors.darkPrimary};
      border: 2px solid ${({ theme }) => theme.colors.darkPrimary};
    }

    &[data-variant='ghost'] {
      color: ${({ theme }) => theme.colors.darkPrimary};
      border: 2px solid ${({ theme }) => theme.colors.darkPrimary};
    }
  }
`;
