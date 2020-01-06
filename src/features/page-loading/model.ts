import { Event, Store, createEvent, createStore } from 'effector';

export const loadingStarted: Event<void> = createEvent();
export const loadingFinished: Event<void> = createEvent();

export const $loadingInProgress: Store<boolean> = createStore(false);

$loadingInProgress
  .on(loadingStarted, (): boolean => true)
  .on(loadingFinished, (): boolean => false);
