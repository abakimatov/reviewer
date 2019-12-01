import { styled } from '@theme';

type InputProps = {
  error: boolean;
};

export const Input = styled.input<InputProps>`
  width: 100%;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px 20px;
  font-weight: 500;

  border: 1px solid;
  border-color: ${({ theme, error }) => (error ? theme.colors.error : theme.colors.dark)};
  background-color: ${({ theme }) => theme.colors.background};
  font-size: ${({ theme }) => theme.fontSizes[3]};
`;
