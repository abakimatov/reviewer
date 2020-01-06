import { LogOutCircle } from 'styled-icons/boxicons-regular/LogOutCircle';

import { styled } from '@theme';

export const SignOutIcon = styled(LogOutCircle)`
  transition: color 0.2s;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.colors.gray};
`;
