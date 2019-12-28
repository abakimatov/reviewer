import * as React from 'react';

import { styled } from '@theme';
import { grayText, EmptyIcon } from '../atoms';

interface Props {
  readonly msg: string;
}

export const EmptyPlaceholder: React.FC<Props> = ({
  msg
}: Props): JSX.Element => (
  <Root>
    <EmptyIcon />
    <Text>{msg}</Text>
  </Root>
);

const Root = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h5`
  ${grayText};

  margin: 0 0 0 20px;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
`;
