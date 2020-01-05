import { styled } from '@theme';

export const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  color: ${({ theme }) => theme.colors.light};
`;
