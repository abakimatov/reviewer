import { Trash2 } from 'styled-icons/feather/Trash2';

import { styled } from '@theme';

export const TrashIcon = styled(Trash2).attrs(() => ({
  crossOrigin: 'true'
}))`
  width: 20px;
  height: 20px;
  transition: color 0.2s;

  color: ${({ theme }) => theme.colors.gray};
`;
