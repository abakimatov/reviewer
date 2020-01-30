import * as React from 'react';
import { Icon } from 'rsuite';

import { MessageText } from '../../atoms';
import s from './styles.pcss';

interface Props {
  readonly msg: string;
}

export const Empty: React.FC<Props> = ({ msg }): JSX.Element => (
  <div className={s.root}>
    <Icon style={{ fontSize: 34, marginRight: 20 }} icon="hdd-o" />
    <MessageText>{msg}</MessageText>
  </div>
);
