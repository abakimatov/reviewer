import { Users } from 'styled-icons/feather/Users';

import { styled } from '@theme';

export const ParticipantsIcon = styled(Users).attrs(() => ({
  crossOrigin: 'true'
}))`
  width: 15px;
  height: 15px;

  color: ${({ theme }) => theme.colors.gray};
`;
