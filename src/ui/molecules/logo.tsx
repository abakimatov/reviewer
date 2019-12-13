import * as React from 'react';

import { Primary, White, LogoText } from '../atoms';

export const Logo: React.FC = React.memo(() => (
  <LogoText>
    <Primary>Re</Primary>
    <White>viewer</White>
  </LogoText>
));
