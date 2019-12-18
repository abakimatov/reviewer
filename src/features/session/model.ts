import { Event, Effect, createEvent, createEffect, forward } from 'effector';

import { routes } from '@features/constants';
import { history } from '@lib/routing';

import { signOutUser } from './api';

export const userSignedOut: Event<React.SyntheticEvent> = createEvent();
const signOutProcessing: Effect<void, void, void> = createEffect();

signOutProcessing.use(signOutUser);
signOutProcessing.done.watch(() => history.push(routes.signIn));

forward({
  from: userSignedOut,
  to: signOutProcessing
});
