import * as React from 'react';
import { useStore } from 'effector-react';
import { Grid, Row, IconButton, Icon } from 'rsuite';

import { Team } from '@typings/team';
import { DefaultLayout, Header, Empty } from '@ui';
import { $teams, pageMounted, removeTeamStarted } from './models/teams';
import { modalOpened } from './models/new-team';
import { TeamCard, RemoveModal, CreateModal } from './organisms';
import s from './styles.scss';

const Teams: React.FC = (): JSX.Element => {
  const teams: Team[] = useStore($teams);

  React.useEffect(() => {
    pageMounted();
  }, []);

  const isTeamsEmpty: boolean = teams.length === 0;

  return (
    <DefaultLayout header={<Header />}>
      <div className={s.topBarWrapper}>
        <IconButton
          onClick={modalOpened}
          icon={<Icon icon="plus-square-o" />}
          appearance="primary"
          placement="left"
        >
          Добавить команду
        </IconButton>
      </div>

      {!isTeamsEmpty && (
        <Grid fluid>
          <Row>
            {teams.map((team: Team) => (
              <TeamCard key={team.id} onRemove={removeTeamStarted} {...team} />
            ))}
          </Row>
        </Grid>
      )}
      {isTeamsEmpty && <Empty msg="cписок команд пуст" />}
      <RemoveModal />
      <CreateModal />
    </DefaultLayout>
  );
};

export default Teams;
