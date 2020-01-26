import * as React from 'react';
import { Icon } from 'rsuite';

import { MessageText } from '../../atoms';
import s from './styles.scss';

interface Props {
  readonly msg: string;
}

export const Empty: React.FC<Props> = ({ msg }): JSX.Element => (
  <div className={s.root}>
    <Icon className={s.icon} icon="hdd-o" />
    <MessageText>{msg}</MessageText>
  </div>
);
