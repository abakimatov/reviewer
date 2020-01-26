import {
  Event,
  Effect,
  Store,
  createEvent,
  createStore,
  createEffect
} from 'effector';
import { SyntheticEvent } from 'react';

import { createFetching } from '@lib/fetching';
import { pageMounted } from './teams';

export const modalOpened: Event<SyntheticEvent> = createEvent();
export const modalClosed: Event<SyntheticEvent> = createEvent();
export const nameChanged: Event<string> = createEvent();

export const $isModalOpen: Store<boolean> = createStore(false);
export const $name: Store<string> = createStore('');

$isModalOpen
  .on(modalOpened, (): boolean => true)
  .on(modalClosed, (): boolean => false)
  .reset(pageMounted);
