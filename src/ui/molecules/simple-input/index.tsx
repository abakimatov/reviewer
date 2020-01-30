import * as React from 'react';
import { InputGroup, Input, Icon } from 'rsuite';

import { InputError } from '../../atoms';
import s from './styles.pcss';

type Props = {
  type: string;
  name: string;
  value: string;
  error: string;
  id?: string;
  icon?: 'avatar' | 'lock';
  handleChange: (value: string, e: React.SyntheticEvent) => void;
};

export const SimpleInput: React.FC<Props> = ({
  type,
  name,
  value,
  error,
  handleChange,
  id,
  icon = null
}) => (
  <div className={s.root}>
    <InputGroup inside>
      <InputGroup.Addon>
        <Icon icon={icon} />
      </InputGroup.Addon>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        error={!!error}
      />
    </InputGroup>
    <InputError name={`${name}-error`}>{error}</InputError>
  </div>
);
