import { styled } from '@theme';

export interface LogoTextProps {
  size: 'large' | 'middle' | 'small';
}

export const Primary = styled.strong`
  color: ${({ theme }) => theme.colors.primary};
`;

export const White = styled.strong`
  color: ${({ theme }) => theme.colors.white};
`;

export const LogoText = styled.span.attrs(({ size }: LogoTextProps) => ({
  'data-size': size
}))<LogoTextProps>`
  user-select: none;

  strong {
    font-weight: 700;
  }

  &[data-size='large'] {
    font-size: ${({ theme }) => theme.fontSizes[8]}px;
  }
  &[data-size='middle'] {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
  &[data-size='small'] {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  }
`;
