import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Header as RHeader, Navbar, Nav, Icon } from 'rsuite';

import { HeaderAccount } from '@features/session';
import { routes } from '@lib/constants';
import { Logo } from '../../atoms';
import s from './styles.pcss';

export const Header: React.FC = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <RHeader>
      <Navbar appearance="subtle">
        <Navbar.Header>
          <Link to="/" className={s.logoWrap}>
            <Logo size="medium" />
          </Link>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item
              active={pathname.includes(routes.teams)}
              href={routes.teams}
              icon={<Icon icon="peoples-map" />}
            >
              Команды
            </Nav.Item>
            <Nav.Item
              active={pathname.includes(routes.employees)}
              href={routes.employees}
              icon={<Icon icon="id-card-o" />}
            >
              Сотрудники
            </Nav.Item>
            <Nav.Item
              active={pathname.includes(routes.skills)}
              href={routes.skills}
              icon={<Icon icon="rate" />}
            >
              Навыки
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <HeaderAccount />
          </Nav>
        </Navbar.Body>
      </Navbar>
    </RHeader>
  );
};
