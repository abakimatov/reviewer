import * as React from 'react';
import { useStore } from 'effector-react';
import { Button, Modal, Input, TagPicker } from 'rsuite';
import cx from 'classnames';

import {
  $isModalOpen,
  modalClosed,
  nameChanged,
  createTeamFetching,
  formSubmitted
} from '../../models/new-team';
import s from './styles.pcss';

export const CreateModal: React.FC = (): JSX.Element => {
  const isModalOpen: boolean = useStore($isModalOpen);
  const isCreateLoading: boolean = useStore(createTeamFetching.isLoading);
  return (
    <Modal backdrop="static" show={isModalOpen} onHide={modalClosed} size="xs">
      <Modal.Title>Новая команда</Modal.Title>
      <Modal.Body>
        <div className={cx([s.inputGroup, s.paddingBottom])}>
          <span className={s.label}>Имя команды</span>
          <Input className={s.input} onChange={nameChanged} />
        </div>
        <div className={s.inputGroup}>
          <span className={s.label}>Участники</span>
          <TagPicker className={s.input} data={[]} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={formSubmitted}
          loading={isCreateLoading}
          appearance="primary"
        >
          Сохранить
        </Button>
        <Button disabled={isCreateLoading} onClick={modalClosed}>
          Отменить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
