import * as React from 'react';

import { DefaultLayout, Header, PageTitle } from '@ui';

const NewTeam: React.FC = () => {
  return (
    <DefaultLayout header={<Header />}>
      <PageTitle>Новая команда</PageTitle>
    </DefaultLayout>
  );
};

export default NewTeam;
