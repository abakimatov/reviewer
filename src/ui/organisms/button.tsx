import * as React from 'react';
import { Button as KitButton } from 'reakit';

import { styled } from '@theme';
import { Preloader } from '../molecules';

interface Props {
  readonly handler?: (event: React.SyntheticEvent) => void;
  readonly loading?: boolean;
  readonly disabled?: boolean;
  readonly children?: React.ReactChild;
  readonly type?: 'submit' | 'button' | 'reset';
  readonly variant?: 'primary' | 'ghost';
  readonly size?: 'small' | 'medium';
  readonly mr?: number;
  readonly ml?: number;
}

interface SProps {
  readonly variant?: 'primary' | 'ghost';
  readonly size?: 'small' | 'medium';
  readonly mr?: number;
  readonly ml?: number;
}

export const Button: React.FC<Props> = React.memo(
  ({
    loading,
    variant,
    disabled,
    children,
    type,
    handler,
    size,
    mr,
    ml
  }: Props) => (
    <Root
      type={type}
      disabled={disabled}
      onClick={handler}
      variant={variant}
      size={size}
      mr={mr}
      ml={ml}
    >
      {loading ? <Preloader variant={variant} size="middle" /> : children}
    </Root>
  )
);

const Root = styled(KitButton).attrs(({ variant, size }: Props) => ({
  'data-variant': variant || 'ghost',
  'data-size': size || 'medium'
}))<SProps>`
  width: 100%;
  border-radius: 30px;
  font-weight: 600;
  box-shadow: none;
  transition: box-shadow 0.2s, opacity 0.05s;
  cursor: pointer;
  text-align: center;
  margin-right: ${({ mr }) => mr || 0}px;
  margin-left: ${({ ml }) => ml || 0}px;

  &[data-size='small'] {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    padding: 5px 10px;
  }

  &[data-size='medium'] {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    padding: 10px 20px;
  }

  &[data-variant='primary'] {
    color: ${({ theme }) => theme.colors.light};
    border: 2px solid transparent;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &[data-variant='ghost'] {
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    background-color: transparent;
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
