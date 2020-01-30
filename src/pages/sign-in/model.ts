import { ChangeEvent } from 'react';
import {
  Store,
  Effect,
  Event,
  createEvent,
  createStore,
  createEffect,
  sample,
  guard
} from 'effector';
import { Schema } from 'rsuite';

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

type Errors = {
  email?: string;
  password?: string;
};

const { StringType } = Schema.Types;

export const validationSchema = Schema.Model({
  email: StringType()
    .isRequired('Пожалуйста, введите email.')
    .isEmail('Пожалуйста, введите корректный email.'),
  password: StringType().isRequired('Пожалуйста, введите пароль')
});

export const $formValues: Store<SignInForm> = createStore({
  email: '',
  password: ''
});
export const $formErrors: Store<Errors> = createStore({});
export const $isFormValid: Store<boolean> = $formErrors.map(
  errors => Object.keys(errors).length === 0
);

export const formChanged: Event<SignInForm> = createEvent();
export const formValidated: Event<Errors> = createEvent();
export const formSubmitted: Event<void> = createEvent();
export const formSended: Event<void> = createEvent();
export const formMounted: Event<void> = createEvent();
export const formUnmounted: Event<void> = createEvent();

export const signInFx: Effect<
  SignInForm,
  firebase.auth.UserCredential,
  firebase.auth.Error
> = createEffect();
export const signInFetching: Fetching = createFetching(signInFx);

$formValues
  .on(formChanged, (_, values) => values)
  .reset(formMounted, formUnmounted);
$formErrors
  .on(formValidated, (_, errors) => errors)
  .reset(formMounted, formUnmounted);

signInFx.use(({ email, password }: SignInForm) => signInUser(email, password));

signInFx.done.watch(() => {
  history.push(routes.teams);
});

signInFx.fail.watch(({ error }) => {
  const errorText: string = getErrorText(error.code, authErrors);
  notifyError(errorText);
});

guard({
  source: formSubmitted,
  filter: $isFormValid,
  target: formSended
});

sample({
  source: $formValues,
  clock: formSended,
  target: signInFx
});
