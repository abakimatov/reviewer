import * as React from 'react';

import { styled } from '@theme';
import { ldsEllipsis1, ldsEllipsis2, ldsEllipsis3 } from '../atoms';

interface Variant {
  readonly variant: 'primary' | 'ghost';
  readonly size?: 'middle' | 'large';
}

export const Preloader: React.FC<Variant> = React.memo(({ variant, size }) => (
  <Root>
    <Spinner variant={variant} size={size}>
      <Element1 />
      <Element2 />
      <Element3 />
      <Element4 />
    </Spinner>
  </Root>
));

const Element1 = styled.div`
  left: 6px;
  animation: ${ldsEllipsis1} 0.6s infinite;
`;

const Element2 = styled.div`
  left: 6px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const Element3 = styled.div`
  left: 26px;
  animation: ${ldsEllipsis2} 0.6s infinite;
`;

const Element4 = styled.div`
  left: 45px;
  animation: ${ldsEllipsis3} 0.6s infinite;
`;

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Spinner = styled.div.attrs<Variant>(({ variant, size }: Variant) => ({
  'data-variant': variant || 'ghost',
  'data-size': size || 'middle'
}))<Variant>`
  display: inline-block;
  position: relative;

  div {
    position: absolute;
    border-radius: 50%;

    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  &[data-variant='primary'] {
    div {
      background: ${({ theme }) => theme.colors.light};
    }
  }

  &[data-variant='ghost'] {
    div {
      background: ${({ theme }) => theme.colors.primary};
    }
  }

  &[data-size='middle'] {
    width: 64px;
    height: 20px;

    div {
      top: 4.5px;
      width: 11px;
      height: 11px;
    }
  }

  &[data-size='large'] {
    width: 128px;
    height: 40px;

    div {
      top: 9px;
      width: 22px;
      height: 22px;
    }

    div:nth-child(1) {
      left: 12px;
    }

    div:nth-child(2) {
      left: 23px;
    }

    div:nth-child(3) {
      left: 52px;
    }

    div:nth-child(4) {
      left: 85px;
    }
  }
`;
