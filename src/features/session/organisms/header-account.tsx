import * as React from 'react';
import { useStore } from 'effector-react';
import { Dropdown, Icon } from 'rsuite';

import { $user } from '../user';
import { userSignedOut } from '../model';

export const HeaderAccount: React.FC = () => {
  const { email } = useStore($user);

  return (
    <Dropdown title={email} icon={<Icon icon="user-o" />} placement="bottomEnd">
      <Dropdown.Item onSelect={userSignedOut}>Выйти</Dropdown.Item>
    </Dropdown>
  );
};
