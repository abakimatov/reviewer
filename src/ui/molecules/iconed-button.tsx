import * as React from 'react';
import { Button } from 'reakit';

import { styled } from '@theme';

interface Props {
  readonly children: React.ReactNode;
  readonly handler: (e: React.SyntheticEvent) => void;
}

export const IconedButton: React.FC<Props> = ({
  children,
  handler
}): JSX.Element => <Root onClick={handler}>{children}</Root>;

const Root = styled(Button)`
  background: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  transition: border 0.2s, color 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.gray};

  svg {
    color: ${({ theme }) => theme.colors.gray};
  }

  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};

    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
