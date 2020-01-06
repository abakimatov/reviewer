import * as React from 'react';

import { Primary, White, LogoText, LogoTextProps } from '../atoms';

export const Logo: React.FC<LogoTextProps> = React.memo(
  ({ size }: LogoTextProps) => (
    <LogoText size={size}>
      <Primary>Re</Primary>
      <White>viewer</White>
    </LogoText>
  )
);
