import { styled } from '@theme';
import { lightText } from './typography';

export const InputLabel = styled.label`
  ${lightText};

  font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;
