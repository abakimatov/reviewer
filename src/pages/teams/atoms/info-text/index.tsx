import * as React from 'react';

import s from './styles.scss';

interface Props {
  readonly children: React.ReactNode;
}

export const InfoText: React.FC<Props> = ({ children }): JSX.Element => (
  <span className={s.root}>{children}</span>
);
