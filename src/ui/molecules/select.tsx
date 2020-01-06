import * as React from 'react';
import SelectInput from 'react-select';

import { styled } from '@theme';
import { InputError, selectStyles } from '../atoms';

type Option = {
  [key: string]: any;
};

interface Props {
  id: string;
  error: string | null;
  options?: Array<Option>;
  placeholder?: string;
  multi?: boolean;
  loading?: boolean;
  handleChange: (e: React.ChangeEvent) => void;
}

export const Select: React.FC<Props> = ({
  id,
  error,
  handleChange,
  options,
  placeholder,
  multi,
  loading
}) => (
  <Root>
    <SelectInput
      id={id}
      options={options}
      onChange={handleChange}
      error={!!error}
      styles={selectStyles}
      placeholder={placeholder}
      isMulti={multi}
      isLoading={loading}
    />
    <InputError error={!!error}>{error}</InputError>
  </Root>
);

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
