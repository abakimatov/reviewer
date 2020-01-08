import { styled } from '@theme';
import { fontFamily } from './typography';

type Props = {
  error: boolean;
  name: string;
};

export const InputError = styled.span<Props>`
  ${fontFamily};

  padding: 5px 0 10px 10px;
  font-weight: 400;
  line-height: 1.1;
  min-height: 34px;
  text-align: left;
  width: 100%;
  transition: opacity 0.1s, min-height 0.1s;

  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  opacity: ${({ error }) => (error ? 1 : 0)};
`;
