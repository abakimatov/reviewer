import { styled } from '@theme';

type Sizings = 'small' | 'middle' | 'large';
type Color = 'dark' | 'gray' | 'black';

interface Props {
  margin?: Sizings;
  color?: Color;
}

export const HorizontalDivider = styled.div.attrs<Props>(
  ({ margin, color }: Props) => ({
    'data-margin': margin || 'small',
    'data-color': color || 'dark'
  })
)<Props>`
  height: 1px;
  width: 100%;

  &[data-margin='small'] {
    margin: 10px 0;
  }

  &[data-margin='middle'] {
    margin: 20px 0;
  }

  &[data-margin='large'] {
    margin: 40px 0;
  }

  &[data-color='dark'] {
    background-color: ${({ theme }) => theme.colors.dark};
  }

  &[data-color='gray'] {
    background-color: ${({ theme }) => theme.colors.gray};
  }

  &[data-color='black'] {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
