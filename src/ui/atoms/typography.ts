import { css } from 'styled-components';

export const fontFamily = css`
  font-family: 'Nunito', sans-serif;
`;

export const darkText = css`
  ${fontFamily};

  font-weight: 500;

  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
`;

export const darkTitle = css`
  ${fontFamily};

  font-weight: 700;
  margin: 0;

  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`;
