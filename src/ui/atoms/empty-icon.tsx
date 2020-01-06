import { ListAlt } from 'styled-icons/fa-regular/ListAlt';

import { styled } from '@theme';

interface Props {
  readonly variant?: 'primary' | 'gray' | 'dark' | 'light';
}

export const EmptyIcon = styled(ListAlt).attrs(({ variant }: Props) => ({
  crossOrigin: 'true',
  'data-variant': variant || 'gray'
}))<Props & { crossOrigin: string }>`
  width: 30px;
  height: 30px;

  &[data-variant='primary'] {
    color: ${({ theme }) => theme.colors.primary};
  }

  &[data-variant='gray'] {
    color: ${({ theme }) => theme.colors.gray};
  }

  &[data-variant='dark'] {
    color: ${({ theme }) => theme.colors.dark};
  }

  &[data-variant='light'] {
    color: ${({ theme }) => theme.colors.light};
  }
`;
