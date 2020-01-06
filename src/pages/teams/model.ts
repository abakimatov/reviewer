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
import { firebase, teamsRef } from '@lib/firebase';
import { notifyError } from '@lib/notifications';

export const pageMounted: Event<void> = createEvent();
export const teamRemoved: Event<string> = createEvent();

export const $teams: Store<Teams> = createStore([]);
export const $teamRemovingId: Store<string | null> = createStore(null);

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

$teams
  .on(fetchTeamsFx.done, (_, { result }): Teams => result)
  .on(removeTeamFx.done, (teams, { result: teamId }) =>
    teams.filter(({ id }) => id !== teamId)
  );
$teamRemovingId
  .on(teamRemoved, (_, id: string) => id)
  .on(removeTeamFx.done, () => null)
  .reset(pageMounted);

fetchTeamsFx.use(
  async (user: firebase.User): Promise<Teams> => {
    const snapshot: firebase.firestore.QuerySnapshot = await teamsRef
      .where('author', '==', user.uid)
      .get();

    const data: Teams = [];

    snapshot.forEach(doc => {
      const { author, name, createdAt, participants } = doc.data();
      data.push({ author, name, createdAt, participants, id: doc.id });
    });

    const sortedByDate: Teams = [...data].sort(
      (a: Team, b: Team): number => b.createdAt - a.createdAt
    );

    return sortedByDate;
  }
);

fetchTeamsFx.fail.watch(() =>
  notifyError('Произошла непредвиденная ошибка. Попробуйте позже.')
);

removeTeamFx.use(async (id: string) => {
  await teamsRef.doc(id).delete();

  return id;
});

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

forward({
  from: teamRemoved,
  to: removeTeamFx
});
