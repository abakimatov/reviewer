import { NavLink } from 'react-router-dom';

import { styled } from '@theme';

export const SNavLink = styled(NavLink).attrs(() => ({
  activeClassName: 'active-route'
}))`
  height: 100%;
  padding: 20px;
  position: relative;
  font-weight: 500;
  transition: color 0.2s;
  text-decoration: none;
  z-index: 1;
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;

  ::after {
    content: '';
    position: absolute;
    bottom: -1px;
    right: 0;
    left: 0;
    height: 1px;
    transition: background-color 0.2s;
    background-color: ${({ theme }) => theme.colors.dark};
  }

  &.active-route {
    color: ${({ theme }) => theme.colors.primary};

    ::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }

  :hover {
    color: ${({ theme }) => theme.colors.primary};

    ::after {
      background-color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
