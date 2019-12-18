import * as React from 'react';

import { styled } from '@theme';

type Props = {
  header?: React.ReactNode;
  children: React.ReactChild;
};

export const DefaultLayout: React.FC<Props> = ({ header, children }: Props) => (
  <Root>
    <Header>
      <Container>{header}</Container>
    </Header>
    <Container>{children}</Container>
  </Root>
);

const Root = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1170px;
  flex: 1;
`;
