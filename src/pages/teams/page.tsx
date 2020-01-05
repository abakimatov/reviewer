import * as React from 'react';
import { useStore, useList } from 'effector-react';

import { Team } from '@typings/team';
import { TeamCard } from '@features/teams';
import { routes } from '@lib/constants';
import { styled } from '@theme';
import {
  DefaultLayout,
  Header,
  EmptyPlaceholder,
  TopBar,
  LinkButton,
  CardLink
} from '@ui';
import { $teams, pageMounted, teamRemoved, removeTeamFetching } from './model';

const List: React.FC = (): JSX.Element => {
  const loading = useStore(removeTeamFetching.isLoading);
  const list: React.ReactNode = useList($teams, (data: Team) => (
    <CardWrapper>
      <CardLink to="/">
        <TeamCard onRemove={teamRemoved} loading={loading} {...data} />
      </CardLink>
    </CardWrapper>
  ));

  return <Root>{list}</Root>;
};

const Teams: React.FC = (): JSX.Element => {
  const teams = useStore($teams);

  React.useEffect(() => {
    pageMounted();
  }, []);

  return (
    <DefaultLayout header={<Header />}>
      <TopBar>
        <LinkButton to={routes.newTeam}>Создать команду</LinkButton>
      </TopBar>
      {teams.length === 0 && <EmptyPlaceholder msg="Список команд пуст" />}
      {teams.length > 0 && <List />}
    </DefaultLayout>
  );
};

const Root = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const CardWrapper = styled.li`
  width: 33%;
  padding: 10px;
  height: 100%;
`;

export default Teams;
