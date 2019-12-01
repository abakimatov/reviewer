import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactChild | React.ReactChild[];
};

export const CenteredContent: React.FC<Props> = ({ children }) => (
  <Root>
    <Main>{children}</Main>
  </Root>
);

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Main = styled.main`
  position: relative;
  width: 960px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
