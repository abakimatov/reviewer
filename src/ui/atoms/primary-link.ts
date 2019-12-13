import { Link } from 'react-router-dom';

import { styled } from '@theme';

export const PrimaryLink = styled(Link)`
  font-weight: 500;
  text-decoration: none;

  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.primary};
`;
