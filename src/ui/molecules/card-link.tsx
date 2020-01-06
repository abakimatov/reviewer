import { Link } from 'react-router-dom';

import { styled } from '@theme';
import { card } from '../atoms';

export const CardLink = styled(Link)`
  ${card};

  text-decoration: none;
`;
