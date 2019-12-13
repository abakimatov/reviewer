import { createStore, createEvent } from 'effector';
import { User } from 'firebase';

export const userChanged = createEvent<User | null>();

export const $user = createStore<User | null>(null);

$user.on(userChanged, <S, U>(_: S, user: U): U => user);
