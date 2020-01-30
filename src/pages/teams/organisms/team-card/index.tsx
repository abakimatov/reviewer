import * as React from 'react';
import dayjs from 'dayjs';
import { Event } from 'effector';
import { Panel, Col, Button, IconButton, Icon } from 'rsuite';

import { Team } from '@typings/team';
import { routes } from '@lib/constants';
import { CreatedDate, ParticipantsQuantity } from '../../molecules';
import s from './styles.pcss';

interface Props extends Team {
  readonly onRemove: Event<string>;
}

export const TeamCard: React.FC<Props> = ({
  name,
  createdAt,
  participants,
  id,
  onRemove
}): JSX.Element => {
  const formattedDate: string = React.useMemo(
    () => dayjs(createdAt).format('DD.MM.YYYY'),
    []
  );

  const onClickRemove = React.useCallback(() => onRemove(id), [id]);

  const participantsQuantity: number = participants.length;
  //TODO: need to add in to Team model on api fetch stage
  const teamDetailsLink = `${routes.teams}/${id}`;
  return (
    <Col xs={24} sm={12} md={8}>
      <Panel className={s.root} bordered shaded>
        <span className={s.title}>{name}</span>
        <section className={s.info}>
          <CreatedDate>{formattedDate}</CreatedDate>
          <ParticipantsQuantity>{participantsQuantity}</ParticipantsQuantity>
        </section>
        <section className={s.actions}>
          <Button appearance="link" href={teamDetailsLink}>
            Подробнее
          </Button>
          <IconButton
            onClick={onClickRemove}
            appearance="default"
            icon={<Icon icon="trash-o" />}
          />
        </section>
      </Panel>
    </Col>
  );
};
