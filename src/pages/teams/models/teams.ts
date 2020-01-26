import { SyntheticEvent } from 'react';
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

import { Teams, Team } from '@typings/team';
import { $user } from '@features/session';
import { loadingStarted, loadingFinished } from '@features/page-loading';
import { createFetching, Fetching } from '@lib/fetching';
import { firebase, teamsRef } from '@lib/firebase';
import { notifyError } from '@lib/notifications';

type ClickEvent = SyntheticEvent<HTMLElement>;

export const pageMounted: Event<void> = createEvent();
export const removeTeamStarted: Event<string> = createEvent();
export const teamRemoved: Event<ClickEvent> = createEvent();
export const removeTeamCanceled: Event<void> = createEvent();

export const $teams: Store<Teams> = createStore([]);
export const $removingTeamId: Store<string | null> = createStore(null);

const fetchTeamsFx: Effect<
  firebase.User,
  Teams,
  firebase.firestore.FirestoreError
> = createEffect();
const removeTeamFx: Effect<
  string,
  string,
  firebase.firestore.FirestoreError
> = createEffect();
export const removeTeamFetching: Fetching = createFetching(removeTeamFx);

$teams
  .on(fetchTeamsFx.done, (_, { result }): Teams => result)
  .on(removeTeamFx.done, (teams, { result: teamId }) =>
    teams.filter(({ id }) => id !== teamId)
  );
$removingTeamId
  .on(removeTeamStarted, (_, id: string) => id)
  .reset(pageMounted, removeTeamCanceled, removeTeamFx.done, removeTeamFx.fail);

fetchTeamsFx.use(
  async (user: firebase.User): Promise<Teams> => {
    const snapshot: firebase.firestore.QuerySnapshot = await teamsRef
      .where('author', '==', user.uid)
      .get();

    const data: Teams = [];

    snapshot.forEach((doc: firebase.firestore.DocumentData) => {
      const { author, name, createdAt, participants } = doc.data();
      data.push({ author, name, createdAt, participants, id: doc.id });
    });

    return data.sort((a: Team, b: Team): number => b.createdAt - a.createdAt);
  }
);

fetchTeamsFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка. Попробуйте позже.')
);

removeTeamFx.use(async (id: string) => {
  await teamsRef.doc(id).delete();

  return id;
});

removeTeamFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка. Попробуйте позже.')
);

sample({
  source: $user,
  clock: pageMounted,
  target: fetchTeamsFx
});

forward({
  from: pageMounted,
  to: loadingStarted
});

forward({
  from: fetchTeamsFx.done,
  to: loadingFinished
});

sample({
  source: $removingTeamId,
  clock: teamRemoved,
  target: removeTeamFx
});
