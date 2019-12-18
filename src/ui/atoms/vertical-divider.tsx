import { styled } from '@theme';

type Sizings = 'small' | 'large';

interface Props {
  size?: Sizings;
  margin?: Sizings;
}

export const VerticalDivider = styled.div.attrs<Props>(
  ({ size, margin }: Props) => {
    let props = {};

    if (size) {
      props = {
        'data-size': size
      };
    }
    if (margin) {
      props = {
        'data-margin': margin
      };
    }

    return props;
  }
)<Props>`
  height: 66%;
  width: 1px;
  margin: 0 20px;
  background-color: ${({ theme }) => theme.colors.dark};

  &[data-size='small'] {
    height: 33%;
  }

  &[data-size='large'] {
    height: 100%;
  }

  &[data-margin='small'] {
    margin: 10px;
  }

  &[data-margin='large'] {
    margin: 40px;
  }
`;
