import { Event, Effect, createEvent, createEffect, forward } from 'effector';

import { routes } from '@lib/constants';
import { history } from '@lib/routing';

import { signOutUser } from './api';

export const userSignedOut: Event<React.SyntheticEvent> = createEvent();
const signOutFx: Effect<void, void, void> = createEffect();

signOutFx.use(signOutUser);
signOutFx.done.watch(() => history.push(routes.signIn));

forward({
  from: userSignedOut,
  to: signOutFx
});
