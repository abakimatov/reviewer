import { ChangeEvent } from 'react';
import {
  Store,
  Event,
  Effect,
  createStore,
  createEvent,
  createEffect,
  forward,
  sample,
  guard,
  combine
} from 'effector';

import { $user } from '@features/session';
import { teamsRef } from '@lib/firebase';
import { createFetching, Fetching } from '@lib/fetching';
import { notifySuccess, notifyError } from '@lib/notifications';

export const nameChanged: Event<ChangeEvent<HTMLInputElement>> = createEvent();
export const formSubmitted: Event<void> = createEvent();
export const formMounted: Event<void> = createEvent();
export const formUnmounted: Event<void> = createEvent();
const formValidated: Event<void> = createEvent();

export const $name: Store<string> = createStore('');
export const $nameError: Store<string | null> = createStore(null);
const $nameIsValid: Store<boolean> = $nameError.map(error => error === null);
export const $participants: Store<[]> = createStore([]);

const createTeamFx: Effect<any, any, void> = createEffect();
export const $createTeamFetching: Fetching = createFetching(createTeamFx);

createTeamFx.use(({ user, ...data }) =>
  teamsRef.add({ author: user.uid, createdAt: Date.now(), ...data })
);

createTeamFx.done.watch(({ params }) =>
  notifySuccess(`Команда ${params.name} успешно создана.`)
);

createTeamFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка. Попробуйте позже.')
);

$name
  .on(
    nameChanged,
    (_, event: ChangeEvent<HTMLInputElement>): string => event.target.value
  )
  .reset(formMounted)
  .reset(formUnmounted)
  .reset(createTeamFx.done);
$nameError
  .on(nameChanged, () => null)
  .reset(formMounted)
  .reset(formUnmounted);

forward({
  from: formSubmitted,
  to: formValidated
});

sample({
  source: $name,
  clock: formValidated,
  fn: name =>
    name.trim().length < 4
      ? 'Длина имени команды должна быть не меньше 4 символов'
      : null,
  target: $nameError
});

guard({
  source: sample(
    combine({
      user: $user,
      name: $name,
      participants: $participants
    }),
    formValidated
  ),
  filter: $nameIsValid,
  target: createTeamFx
});
