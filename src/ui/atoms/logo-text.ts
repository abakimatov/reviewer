import { styled } from '@theme';

export const Primary = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;

export const White = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes[8]}px;

  strong {
    font-weight: 700;
  }
`;
