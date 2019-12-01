import { styled } from '@theme';

export const Primary = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Dark = styled.strong`
  color: ${({ theme }) => theme.colors.dark};
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[8]}px;

  strong {
    font-weight: 700;
  }
`;
