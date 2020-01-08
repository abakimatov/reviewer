import * as React from 'react';
import { Button as KitButtom } from 'reakit';
import { Event } from 'effector';

import { styled } from '@theme';
import { SignOutIcon, SignOutText } from '../atoms';

interface Props {
  onSignedOut: Event<React.SyntheticEvent>;
}

export const SignOutButton: React.FC<Props> = ({ onSignedOut }: Props) => (
  <Button onClick={onSignedOut}>
    <SignOutIcon />
    <SignOutText>Выйти</SignOutText>
  </Button>
);

const Button = styled(KitButtom).attrs(() => ({
  'data-action': 'logout'
}))`
  border: none;
  background: none;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  :hover {
    ${SignOutIcon}, ${SignOutText} {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
