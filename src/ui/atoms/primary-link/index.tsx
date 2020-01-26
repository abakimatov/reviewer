import * as React from 'react';
import { Link } from 'react-router-dom';

import s from './styles.scss';

interface Props {
  readonly to: string;
  readonly children: React.ReactNode;
}

export const PrimaryLink: React.FC<Props> = ({ to, children }): JSX.Element => (
  <Link className={s.primaryLink} to={to}>
    {children}
  </Link>
);
