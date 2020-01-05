import * as React from 'react';

import { styled } from '@theme';
import { grayText } from '@ui';
import { ClockIcon } from '../atoms';

interface Props {
  readonly children: React.ReactNode;
}

export const CreatedAt: React.FC<Props> = ({
  children
}: Props): JSX.Element => (
  <Root>
    <ClockIcon />
    <Text>{children}</Text>
  </Root>
);

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
`;

const Text = styled.span`
  ${grayText};

  padding-left: 5px;
  line-height: 0.8;
`;
