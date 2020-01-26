import * as React from 'react';
import { Loader } from 'rsuite';

import { Logo } from '@ui';
import s from './styles.scss';

export const PageLoader: React.FC = () => (
  <div className={s.overlay}>
    <Logo size="large" />
    <Loader size="lg" inverse />
  </div>
);
