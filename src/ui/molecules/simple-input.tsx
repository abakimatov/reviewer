import * as React from 'react';

import { styled } from '@theme';
import { input, InputError } from '../atoms';

type Props = {
  type: string;
  name: string;
  value: string;
  error: string;
  id?: string;
  handleChange: (e: React.ChangeEvent) => void;
};

export const SimpleInput: React.FC<Props> = ({
  type,
  name,
  value,
  error,
  handleChange,
  id
}) => (
  <Root>
    <Input
      id={id}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      error={!!error}
    />
    <InputError name={`${name}-error`} error={!!error}>
      {error}
    </InputError>
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
