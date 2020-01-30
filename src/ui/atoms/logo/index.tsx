import * as React from 'react';

import s from './styles.pcss';

interface Props {
  readonly size: 'large' | 'medium' | 'small';
  readonly variant?: 'inverted';
}

export const Logo: React.FC<Props> = ({ size, variant }) => (
  <span data-size={size} className={s.logo}>
    <strong data-variant={variant} className={s.base}>
      Re
    </strong>
    <strong data-variant={variant} className={s.light}>
      viewer
    </strong>
  </span>
);
