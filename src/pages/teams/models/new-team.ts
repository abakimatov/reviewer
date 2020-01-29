import {
  Event,
  Effect,
  Store,
  createEvent,
  createStore,
  createEffect,
  sample,
  combine,
  guard,
  forward
} from 'effector';
import { User } from 'firebase';
import { SyntheticEvent } from 'react';

import { Team } from '@typings/team';
import { $user } from '@features/session';
import { teamsRef } from '@lib/firebase';
import { createFetching, Fetching } from '@lib/fetching';
import { notifySuccess, notifyError } from '@lib/notifications';
import { pageMounted, teamCreated } from './teams';

export const modalOpened: Event<SyntheticEvent> = createEvent();
export const modalClosed: Event<SyntheticEvent | any> = createEvent();
export const nameChanged: Event<string> = createEvent();
export const formSubmitted: Event<SyntheticEvent> = createEvent();
export const formValidated: Event<boolean> = createEvent();

export const $isModalOpen: Store<boolean> = createStore(false);
export const $name: Store<string> = createStore('');
export const $isNameValid: Store<boolean> = $name.map(
  name => name.trim().length > 0
);
export const $participants: Store<[]> = createStore([]);

export const createTeamFx: Effect<
  Team & { user: User },
  Promise<Team>,
  firebase.firestore.FirestoreError
> = createEffect();
export const createTeamFetching: Fetching = createFetching(createTeamFx);

createTeamFx.use(async ({ user, ...data }) => {
  const teamRef = await teamsRef.add({
    author: user.uid,
    createdAt: Date.now(),
    ...data
  });
  const teamSnapshot: firebase.firestore.DocumentSnapshot = await teamRef.get({
    source: 'server'
  });
  const { author, createdAt, participants, name } = teamSnapshot.data();

  return { id: teamSnapshot.id, author, createdAt, participants, name };
});

createTeamFx.done.watch(({ params }) =>
  notifySuccess(`Команда ${params.name} успешно создана.`)
);

createTeamFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка, попробуйте позже.')
);

$isModalOpen
  .on(modalOpened, (): boolean => true)
  .on(modalClosed, (): boolean => false)
  .reset(pageMounted);

$name
  .on(nameChanged, (_: string, name: string): string => name)
  .reset(modalOpened, modalClosed);

sample({
  source: $isNameValid,
  clock: formSubmitted,
  target: formValidated
});

formValidated.watch(
  isNameValid => !isNameValid && notifyError('Пожалуйста, введите имя команды!')
);

guard({
  source: sample(
    combine({ name: $name, user: $user, participants: $participants }),
    formValidated
  ),
  filter: $isNameValid,
  target: createTeamFx
});

forward({
  from: createTeamFx.done,
  to: [modalClosed, teamCreated]
});
