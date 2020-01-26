import * as React from 'react';
import dayjs from 'dayjs';

import { Team } from '@typings/team';
import { styled } from '@theme';
import { HorizontalDivider, IconedButton, TrashIcon } from '@ui';
import { Title } from '../atoms';
import { CreatedAt, ParticipantsCount } from '../molecules';
import { DeleteConfirmation } from './delete-confirmation';

interface Props extends Team {
  readonly onRemove: (id: string) => void;
  readonly loading: boolean;
  readonly removeIsAvailable: boolean;
}

export const TeamCard: React.FC<Props> = React.memo(
  ({
    name,
    createdAt,
    participants,
    id,
    loading,
    removeIsAvailable,
    onRemove
  }: Props): JSX.Element => {
    const [isConfirmVisible, setConfirmVisible] = React.useState<boolean>(
      false
    );

    const createdDate = React.useMemo(
      () => dayjs(createdAt).format('DD.MM.YYYY'),
      []
    );

    const onConfirm = React.useCallback(
      (e: React.SyntheticEvent) => {
        e.preventDefault();

        if (removeIsAvailable) {
          onRemove(id);
        }
      },
      [removeIsAvailable, id]
    );

    const onChangeConfirmVisible = React.useCallback(
      (e: React.SyntheticEvent) => {
        e.preventDefault();
        setConfirmVisible(isVisible => !isVisible);
      },
      []
    );

    return (
      <Root>
        <Title>{name}</Title>
        <HorizontalDivider color="gray" margin="small" />
        <Info>
          <CreatedAt>{createdDate}</CreatedAt>
          <ParticipantsCount>{participants.length}</ParticipantsCount>
        </Info>
        <HorizontalDivider color="gray" margin="small" />
        <Actions>
          {!isConfirmVisible && (
            <IconedButton handler={onChangeConfirmVisible}>
              <TrashIcon />
            </IconedButton>
          )}
          {isConfirmVisible && (
            <DeleteConfirmation
              loading={loading}
              onConfirm={onConfirm}
              onCancel={onChangeConfirmVisible}
            />
          )}
        </Actions>
      </Root>
    );
  }
);

const Root = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding-top: 10px;
`;
