import * as React from 'react';
import { useStore } from 'effector-react';

import { styled } from '@theme';
import { VerticalDivider, grayText } from '@ui';
import { SignOutButton } from '../molecules';
import { $user } from '../user';
import { userSignedOut } from '../model';

export const HeaderAccountActions: React.FC = () => {
  const { email } = useStore($user);

  return (
    <Root>
      <UserEmail>{email}</UserEmail>
      <VerticalDivider margin="small" />
      <SignOutButton onSignedOut={userSignedOut} />
    </Root>
  );
};

const Root = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserEmail = styled.span`
  ${grayText};
`;
