import * as React from 'react';
import { Container, Header, Content } from 'rsuite';

import s from './styles.scss';

type Props = {
  header?: React.ReactNode;
  children: React.ReactNode;
};

export const DefaultLayout: React.FC<Props> = ({
  header,
  children
}: Props): JSX.Element => (
  <Container className={s.pageWrapper}>
    <Header>{header}</Header>
    <Content>{children}</Content>
  </Container>
);
