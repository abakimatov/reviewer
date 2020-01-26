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
import { validatePassword } from '@lib/validators';
import { notifyError, getErrorText } from '@lib/notifications';
import { Fetching, createFetching } from '@lib/fetching';
import { authErrors, routes } from '@lib/constants';
import { createUser } from '@features/session';

type SignUpForm = {
  email: string;
  password: string;
  confirmPassword: string;
};

type Errors = {
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const { StringType } = Schema.Types;

export const validationSchema = Schema.Model({
  email: StringType()
    .isRequired('Пожалуйста, введите email.')
    .isEmail('Пожалуйста, введите корректный email.'),
  password: StringType()
    .isRequired('Пожалуйста, введите пароль')
    .addRule(
      value => value.length > 7,
      'Пароль должен содержать не меньше 8 символов.'
    )
    .addRule(
      validatePassword,
      'Пароль должен содержать заглавные и прописные символы, а также числа.'
    ),
  confirmPassword: StringType()
    .isRequired('Пожалуйста, подтвердите пароль.')
    .addRule(
      (confirmPassword, { password }) => confirmPassword === password,
      'Введенный пароль должен совпадать с предыдущим.'
    )
});

export const $formValues: Store<SignUpForm> = createStore({
  email: '',
  password: '',
  confirmPassword: ''
});
export const $formErrors: Store<Errors> = createStore({});
export const $isFormValid: Store<boolean> = $formErrors.map(
  errors => Object.keys(errors).length === 0
);

export const formChanged: Event<SignUpForm> = createEvent();
export const formValidated: Event<Errors> = createEvent();
export const formSubmitted: Event<void> = createEvent();
export const formSended: Event<void> = createEvent();
export const formMounted: Event<void> = createEvent();
export const formUnmounted: Event<void> = createEvent();

export const signUpFx: Effect<
  SignUpForm,
  firebase.auth.UserCredential,
  firebase.auth.Error
> = createEffect();
export const signUpFetching: Fetching = createFetching(signUpFx);

$formValues
  .on(formChanged, (_, values) => values)
  .reset(formMounted, formUnmounted);
$formErrors
  .on(formValidated, (_, errors) => errors)
  .reset(formMounted, formUnmounted);

signUpFx.use(({ email, password }: SignUpForm) => createUser(email, password));

signUpFx.done.watch(() => {
  history.push(routes.teams);
});

signUpFx.fail.watch(({ error }) => {
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
  target: signUpFx
});
