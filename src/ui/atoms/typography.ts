import { css } from 'styled-components';

export const fontFamily = css`
  font-family: 'Nunito', sans-serif;
`;

export const lightText = css`
  font-weight: 500;

  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
`;

export const greyText = css`
  font-weight: 500;

  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.grey};
`;

export const lightTitle = css`
  font-weight: 700;
  margin: 0;

  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
`;
