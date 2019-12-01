import { ChangeEvent } from 'react';
import {
  Store,
  combine,
  sample,
  createEffect,
  createEvent,
  createStore,
  createStoreObject
} from 'effector';

import { history } from '@lib/routing';
import { createFetching, Fetching } from '@lib/fetching';
import { createUser } from '@features/session';
import { notifyError, notifySuccess } from '@features/notifications';
import { validateEmail, validatePassword, validatePasswordsEqual } from '@lib/validators';

type FormErrorsSchema = {
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
};

type SignUpForm = Store<{
  email: string;
  password: string;
  confirmPassword: string;
}>;

type FormPlainObject = {
  email: string;
  password: string;
  confirmPassword: string;
};

export const emailChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const passwordChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const confirmPasswordChanged = createEvent<ChangeEvent<HTMLInputElement>>();
export const formSubmitted = createEvent<void>();
export const formValidated = createEvent<FormErrorsSchema>();
export const formMounted = createEvent<void>();
export const formUnmounted = createEvent<void>();

const signUpProcessing = createEffect();
export const signUpFetching: Fetching = createFetching(signUpProcessing);

export const $email: Store<string> = createStore<string>('');
export const $emailError: Store<string | null> = createStore(null);
export const $isEmailCorrect: Store<boolean> = combine(
  $email,
  $emailError,
  (email, emailError) => email.length > 0 && emailError === null
);

export const $password: Store<string> = createStore<string>('');
export const $passwordError: Store<string | null> = createStore(null);
export const $isPasswordCorrect: Store<boolean> = combine(
  $password,
  $passwordError,
  (password, passwordError) => password.length > 0 && passwordError === null
);

export const $confirmPassword: Store<string> = createStore<string>('');
export const $confirmPasswordError: Store<string | null> = createStore(null);
export const $isConfirmPasswordCorrect: Store<boolean> = combine(
  $confirmPassword,
  $confirmPasswordError,
  (confirmPassword, confirmPasswordError) =>
    confirmPassword.length > 0 && confirmPasswordError === null
);

export const $signUpForm: SignUpForm = createStoreObject({
  email: $email,
  password: $password,
  confirmPassword: $confirmPassword
});

export const $isFormValid: Store<boolean> = combine(
  $isEmailCorrect,
  $isPasswordCorrect,
  $isConfirmPasswordCorrect,
  (isEmailCorrect, isPasswordCorrect, isConfirmPasswordCorrect): boolean =>
    isEmailCorrect && isPasswordCorrect && isConfirmPasswordCorrect
);

export const $isSubmitEnabled: Store<boolean> = combine(
  $isFormValid,
  (isFormValid: boolean): boolean => isFormValid
);

const trimEvent = (event: ChangeEvent<HTMLInputElement>): string => event.target.value.trim();

$email.on(emailChanged.map(trimEvent), (_: string, email: string): string => email);
$password.on(passwordChanged.map(trimEvent), (_: string, password: string): string => password);
$confirmPassword.on(
  confirmPasswordChanged.map(trimEvent),
  (_: string, confirmPassword: string): string => confirmPassword
);

$emailError.on(formValidated, (_, { email }) => email).on(emailChanged, () => null);
$passwordError.on(formValidated, (_, { password }) => password).on(passwordChanged, () => null);
$confirmPasswordError
  .on(formValidated, (_, { confirmPassword }) => confirmPassword)
  .on(confirmPasswordChanged, () => null);

$signUpForm.reset(formMounted).reset(formUnmounted);

sample($signUpForm, formSubmitted).watch(({ email, password, confirmPassword }) => {
  const validated = {
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validatePasswordsEqual(password, confirmPassword)
  };
  formValidated(validated);
});

sample(
  createStoreObject({ isSubmitEnabled: $isSubmitEnabled, form: $signUpForm }),
  formValidated
).watch(({ isSubmitEnabled, form }: { isSubmitEnabled: boolean; form: FormPlainObject }) => {
  if (isSubmitEnabled) {
    signUpProcessing(form);
  }
});

signUpProcessing.use(async (form: FormPlainObject) => {
  const { email, password } = form;

  await createUser(email, password);
});

signUpProcessing.done.watch(() => {
  history.push('/home');

  return setTimeout(() => notifySuccess('Добро пожаловать! Спасибо за регистрацию.'), 1000);
});

signUpProcessing.fail.watch(({ error }) => notifyError(error.message));
