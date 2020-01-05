import * as React from 'react';

import { styled } from '@theme';
import { input, InputError } from '../atoms';

type Props = {
  type: string;
  id: string;
  value: string;
  error: string;
  handleChange: (e: React.ChangeEvent) => void;
};

export const SimpleInput: React.FC<Props> = ({
  type,
  id,
  value,
  error,
  handleChange
}) => (
  <Root>
    <Input
      type={type}
      id={id}
      value={value}
      onChange={handleChange}
      error={!!error}
    />
    <InputError error={!!error}>{error}</InputError>
  </Root>
);

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  ${input};
`;
