import {
  Event,
  Store,
  Effect,
  createEvent,
  createStore,
  createEffect,
  forward,
  sample
} from 'effector';

import { $user } from '@features/session';
import { firebase, teamsRef } from '@lib/firebase';
import { notifyError } from '@lib/notifications';

export const pageMounted: Event<void> = createEvent();

export const $teams: Store<any[] | any> = createStore([]);

const fetchTeamsFx: Effect<
  firebase.User,
  void,
  firebase.firestore.FirestoreError
> = createEffect();

fetchTeamsFx.use(async (user: firebase.User) => {
  const snapshot: firebase.firestore.QuerySnapshot = await teamsRef
    .where('author', '==', user.uid)
    .get();

  return snapshot.forEach(doc => doc.data());
});

fetchTeamsFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка. Попробуйте позже.')
);

forward({
  from: sample($user, pageMounted),
  to: fetchTeamsFx
});

sample({
  source: fetchTeamsFx.done,
  clock: fetchTeamsFx.done,
  fn: ({ result }) => result,
  target: $teams
});
