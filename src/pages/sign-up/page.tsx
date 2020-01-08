import * as React from 'react';
import { useStore } from 'effector-react';

import { routes } from '@lib/constants';
import { styled } from '@theme';
import {
  CenteredContent,
  SimpleInput,
  Logo,
  InputLabel,
  Button,
  PrimaryLink,
  lightTitle,
  grayText
} from '@ui';

import {
  $email,
  $password,
  $confirmPassword,
  $emailError,
  $passwordError,
  $confirmPasswordError,
  emailChanged,
  passwordChanged,
  confirmPasswordChanged,
  formSubmitted,
  formMounted,
  formUnmounted,
  signUpFetching
} from './model';

const handleSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  formSubmitted();
};

const EmailInput: React.FC = () => {
  const email: string = useStore($email);
  const emailError: string | null = useStore($emailError);

  return (
    <>
      <InputLabel htmlFor="email">Email</InputLabel>
      <SimpleInput
        id="email"
        name="email"
        type="email"
        value={email}
        error={emailError}
        handleChange={emailChanged}
      />
    </>
  );
};

const PasswordInput: React.FC = () => {
  const password: string = useStore($password);
  const passwordError: string | null = useStore($passwordError);

  return (
    <>
      <InputLabel htmlFor="password">Пароль</InputLabel>
      <SimpleInput
        id="password"
        name="password"
        type="password"
        value={password}
        error={passwordError}
        handleChange={passwordChanged}
      />
    </>
  );
};

const ConfirmPasswordInput: React.FC = () => {
  const confirmPassword: string = useStore($confirmPassword);
  const confirmPasswordError: string | null = useStore($confirmPasswordError);

  return (
    <>
      <InputLabel htmlFor="confirmPassword">Подтверждение пароля</InputLabel>
      <SimpleInput
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        value={confirmPassword}
        error={confirmPasswordError}
        handleChange={confirmPasswordChanged}
      />
    </>
  );
};

const SignUp: React.FC = () => {
  const isLoading: boolean = useStore(signUpFetching.isLoading);

  React.useEffect(() => {
    formMounted();

    return () => formUnmounted();
  }, []);

  return (
    <CenteredContent>
      <LogoWrap>
        <Logo size="large" />
      </LogoWrap>

      <Form>
        <Title>Регистрация</Title>
        <EmailInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <Button
          type="submit"
          handler={handleSubmit}
          loading={isLoading}
          variant="primary"
        >
          Зарегистрироваться
        </Button>
        <ToLogin>
          <ToLoginText>Уже есть аккаунт?</ToLoginText>
          <PrimaryLink to={routes.signIn}>Войти</PrimaryLink>
        </ToLogin>
      </Form>
    </CenteredContent>
  );
};

const LogoWrap = styled.div`
  position: absolute;
  top: 40px;
`;

const Form = styled.form.attrs(() => ({
  'data-test-id': 'sign-up-form'
}))`
  width: 100%;
  padding: 0 320px;
`;

const Title = styled.h1`
  ${lightTitle};

  margin-bottom: 50px;
`;

const ToLogin = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToLoginText = styled.span`
  ${grayText};

  margin-right: 10px;
`;

export default SignUp;
