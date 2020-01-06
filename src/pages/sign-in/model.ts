import { ChangeEvent } from 'react';
import {
  Store,
  Effect,
  Event,
  createEvent,
  createStore,
  createEffect,
  createStoreObject,
  sample,
  combine,
  forward,
  guard
} from 'effector';

import { history } from '@lib/routing';
import { firebase } from '@lib/firebase';
import { notifyError, getErrorText } from '@lib/notifications';
import { Fetching, createFetching } from '@lib/fetching';
import { validateEmail } from '@lib/validators';
import { authErrors, routes } from '@lib/constants';
import { signInUser } from '@features/session';

type SignInForm = {
  email: string;
  password: string;
};

type SignInFormStore = Store<{
  email: string;
  password: string;
}>;

type ErrorsSchema = {
  email: string | null;
  password: string | null;
};

export const emailChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const passwordChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const formSubmitted = createEvent();
export const formValidated: Event<ErrorsSchema> = createEvent();
export const formMounted = createEvent();
export const formUnmounted = createEvent();

export const signInFx: Effect<any, any, firebase.auth.Error> = createEffect();
export const signInFetching: Fetching = createFetching(signInFx);

export const $email: Store<string> = createStore<string>('');
export const $password: Store<string> = createStore<string>('');
export const $emailError: Store<string | null> = createStore<string | null>(
  null
);
export const $passwordError: Store<string | null> = createStore<string | null>(
  null
);
export const $isEmailCorrect: Store<boolean> = $emailError.map(
  state => state === null
);
export const $isPasswordCorrect: Store<boolean> = $passwordError.map(
  state => state === null
);
const $signInForm: SignInFormStore = createStoreObject({
  email: $email,
  password: $password
});
const $isFormValid: Store<boolean> = combine(
  $isEmailCorrect,
  $isPasswordCorrect,
  (isEmailCorrect, isPasswordCorrect) => isEmailCorrect && isPasswordCorrect
);

const trimEvent = (e: ChangeEvent<HTMLInputElement>): string =>
  e.target.value.trim();

$email
  .on(emailChanged.map(trimEvent), (_, value): string => value)
  .reset(formMounted)
  .reset(formUnmounted);
$password
  .on(passwordChanged.map(trimEvent), (_, value): string => value)
  .reset(formMounted)
  .reset(formUnmounted);
$emailError.on(formValidated, (_, { email }) => validateEmail(email));
$passwordError.on(formValidated, (_, { password }) =>
  password.length > 0 ? null : 'Пожалуйста, введите пароль.'
);
$signInForm.reset(formMounted).reset(formUnmounted);

forward({
  from: sample($signInForm, formSubmitted),
  to: formValidated
});

guard({
  source: formValidated,
  filter: $isFormValid,
  target: signInFx
});

signInFx.use(({ email, password }: SignInForm) => signInUser(email, password));

signInFx.done.watch(() => {
  history.push(routes.teams);
});

signInFx.fail.watch(({ error }) => {
  const errorText: string = getErrorText(error.code, authErrors);
  notifyError(errorText);
});
