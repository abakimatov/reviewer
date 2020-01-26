import * as React from 'react';
import { Icon } from 'rsuite';

import { InfoText } from '../../atoms';
import s from './styles.scss';

interface Props {
  readonly children: React.ReactNode;
}

export const CreatedDate: React.FC<Props> = ({ children }): JSX.Element => (
  <div className={s.root}>
    <Icon icon="clock-o" />
    <InfoText>{children}</InfoText>
  </div>
);
