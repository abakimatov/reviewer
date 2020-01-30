import * as React from 'react';
import { useStore } from 'effector-react';
import { Button, Modal } from 'rsuite';

import {
  $removingTeamId,
  removeTeamFetching,
  removeTeamCanceled,
  teamRemoved
} from '../../models/teams';

export const RemoveModal: React.FC = (): JSX.Element => {
  const isRemoveLoading = useStore(removeTeamFetching.isLoading);
  const removingId = useStore($removingTeamId);
  //TODO: need to fix payload types of 'removeTeamCanceled' to make it compatible with modal hide event type
  const hideModal = React.useCallback(() => removeTeamCanceled(), []);
  return (
    <Modal
      backdrop="static"
      show={removingId !== null}
      onHide={hideModal}
      size="xs"
    >
      <Modal.Body>Вы уверены что хотите удалить эту команду?</Modal.Body>
      <Modal.Footer>
        <Button
          onClick={teamRemoved}
          loading={isRemoveLoading}
          appearance="primary"
        >
          Удалить
        </Button>
        <Button
          onClick={hideModal}
          disabled={isRemoveLoading}
          appearance="subtle"
        >
          Отмена
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
