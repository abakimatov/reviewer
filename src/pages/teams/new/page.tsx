import * as React from 'react';
import { useStore } from 'effector-react';

import { styled } from '@theme';
import {
  DefaultLayout,
  Header,
  PageTitle,
  SimpleInput,
  InputLabel,
  Select,
  Button
} from '@ui';
import {
  $name,
  $nameError,
  $createTeamFetching,
  nameChanged,
  formMounted,
  formUnmounted,
  formSubmitted
} from './model';

const handleSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  formSubmitted();
};

const NameInput: React.FC = (): JSX.Element => {
  const name = useStore($name);
  const nameError = useStore($nameError);
  return (
    <>
      <InputLabel htmlFor="name">Имя команды*</InputLabel>
      <SimpleInput
        type="text"
        id="name"
        value={name}
        error={nameError}
        handleChange={nameChanged}
      />
    </>
  );
};

const ParticipantsSelect: React.FC = (): JSX.Element => (
  <>
    <InputLabel htmlFor="participants">Участники*</InputLabel>
    <Select
      id="participants"
      options={[{ value: 'kek', label: 'Кекович Кек' }]}
      error=""
      handleChange={() => {}}
      placeholder="Выберите участников команды"
      multi
    />
  </>
);

const Form: React.FC = (): JSX.Element => {
  const isLoading = useStore($createTeamFetching.isLoading);

  return (
    <Root onSubmit={handleSubmit}>
      <NameInput />
      <ParticipantsSelect />
      <Button type="submit" variant="primary" loading={isLoading}>
        Создать
      </Button>
    </Root>
  );
};

const NewTeam: React.FC = (): JSX.Element => {
  React.useEffect(() => {
    formMounted();
    return () => formUnmounted();
  }, []);
  return (
    <DefaultLayout header={<Header />}>
      <PageTitle>Новая команда</PageTitle>
      <Form />
    </DefaultLayout>
  );
};

const Root = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 350px;
`;

export default NewTeam;
