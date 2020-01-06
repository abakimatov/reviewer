import { Clock } from 'styled-icons/feather/Clock';

import { styled } from '@theme';

export const ClockIcon = styled(Clock).attrs(() => ({
  crossOrigin: 'true'
}))`
  width: 15px;
  height: 15px;

  color: ${({ theme }) => theme.colors.gray};
`;
