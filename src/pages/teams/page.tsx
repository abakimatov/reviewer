import * as React from 'react';
import { useStore } from 'effector-react';

import { routes } from '@lib/constants';
import {
  DefaultLayout,
  Header,
  EmptyPlaceholder,
  TopBar,
  LinkButton
} from '@ui';
import { $teams, pageMounted } from './model';

const Teams: React.FC = () => {
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
    </DefaultLayout>
  );
};

export default Teams;
