import * as React from 'react';

import { styled } from '@theme';
import { DefaultLayout, Header } from '@ui';

const Teams: React.FC = () => (
  <DefaultLayout header={<Header />}>
    <Root>teams</Root>
  </DefaultLayout>
);

const Root = styled.h1``;

export default Teams;
