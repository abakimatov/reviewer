import { css } from 'styled-components';

type InputProps = {
  error: boolean;
};

export const input = css<InputProps>`
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 20px;
  font-weight: 500;

  border: 1px solid;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.error : 'transparent'};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;
