import * as React from 'react';
import cx from 'classnames';

import s from './styles.scss';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

export const CenteredContent: React.FC<Props> = ({ children }): JSX.Element => (
  <div className={cx([s.centered, s.root])}>
    <main className={cx([s.centered, s.main])}>{children}</main>
  </div>
);
