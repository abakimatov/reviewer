import * as React from 'react';

import { Primary, Dark, LogoText } from '../atoms';

export const Logo: React.FC = React.memo(() => (
  <LogoText>
    <Primary>Re</Primary>
    <Dark>viewer</Dark>
  </LogoText>
));
