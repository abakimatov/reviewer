import * as React from 'react';
import cx from 'classnames';

import * as s from './styles.pcss';

interface Props {
  readonly children: React.ReactNode | null;
  readonly name: string;
}

export const InputError: React.FC<Props> = ({ name, children }) => (
  <span
    className={cx([
      s.error,
      {
        [s.hidden]: !children,
        [s.visible]: !!children
      }
    ])}
    data-name={name}
  >
    {children}
  </span>
);
