import * as React from 'react';

import { styled } from '@theme';
import { grayText } from '@ui';
import { ParticipantsIcon } from '../atoms';

interface Props {
  readonly children: React.ReactNode;
}

export const ParticipantsCount: React.FC<Props> = ({
  children
}: Props): JSX.Element => (
  <Root>
    <ParticipantsIcon />
    <Text>{children}</Text>
  </Root>
);

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.span`
  ${grayText};

  padding-left: 5px;
  line-height: 0.8;
`;
