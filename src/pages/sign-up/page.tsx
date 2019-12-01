import * as React from 'react';
import { useStore } from 'effector-react';

import { styled } from '@theme';
import { CenteredContent, SimpleInput, Logo, InputLabel, Button, darkTitle } from '@ui';

import {
  $email,
  $password,
  $confirmPassword,
  $emailError,
  $passwordError,
  $confirmPasswordError,
  $isSubmitEnabled,
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
        type="email"
        id="email"
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
        type="password"
        id="password"
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

  React.useEffect(() => {
    formMounted();

    return () => formUnmounted();
  }, []);

  return (
    <>
      <InputLabel htmlFor="confirmPassword">Подтверждение пароля</InputLabel>
      <SimpleInput
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        error={confirmPasswordError}
        handleChange={confirmPasswordChanged}
      />
    </>
  );
};

const SignUp: React.FC = () => {
  const isSubmitEnabled: boolean = useStore($isSubmitEnabled);
  const isLoading: boolean = useStore(signUpFetching.isLoading);

  return (
    <CenteredContent>
      <LogoWrap>
        <Logo />
      </LogoWrap>

      <Form>
        <Title>Регистрация</Title>
        <EmailInput />
        <PasswordInput />
        <ConfirmPasswordInput />
        <Button
          type="submit"
          disabled={!isSubmitEnabled}
          handler={handleSubmit}
          loading={isLoading}
        >
          Зарегистрироваться
        </Button>
      </Form>
    </CenteredContent>
  );
};

const LogoWrap = styled.div`
  position: absolute;
  top: 40px;
`;

const Form = styled.div`
  width: 100%;
  padding: 0 320px;
`;

const Title = styled.h1`
  ${darkTitle};

  margin-bottom: 50px;
`;

export default SignUp;
