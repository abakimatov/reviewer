import * as React from 'react';

import { styled } from '@theme';
import { Button, grayText } from '@ui';

interface Props {
  onConfirm: (e: React.SyntheticEvent) => void;
  onCancel: (e: React.SyntheticEvent) => void;
  loading: boolean;
}

export const DeleteConfirmation: React.FC<Props> = ({
  onConfirm,
  onCancel,
  loading
}: Props): JSX.Element => (
  <Root>
    <Text>Удалить команду?</Text>
    <ButtonsWrap>
      <Button
        handler={onConfirm}
        variant="primary"
        loading={loading}
        mr={10}
        size="small"
      >
        Да
      </Button>
      <Button handler={onCancel} variant="ghost" size="small">
        Нет
      </Button>
    </ButtonsWrap>
  </Root>
);

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.span`
  ${grayText};
`;

const ButtonsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
