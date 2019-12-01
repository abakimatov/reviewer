import { styled } from '@theme';
import { darkText } from './typography';

export const InputLabel = styled.label`
  ${darkText};

  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;
