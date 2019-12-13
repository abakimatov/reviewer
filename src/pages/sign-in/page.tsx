import * as React from 'react';
import { useStore } from 'effector-react';

import { styled } from '@theme';
import {
  CenteredContent,
  SimpleInput,
  Logo,
  InputLabel,
  Button,
  PrimaryLink,
  lightTitle,
  greyText
} from '@ui';
import {
  $email,
  $password,
  $emailError,
  $passwordError,
  emailChanged,
  passwordChanged,
  formSubmitted,
  signInFetching
} from './model';

const handleSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  formSubmitted();
};

const EmailInput: React.FC = () => {
  const email: string = useStore($email);
  const emailError: string = useStore($emailError);

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
  const passwordError: string = useStore($passwordError);

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

const SignIn: React.FC = () => {
  const isLoading = useStore(signInFetching.isLoading);

  return (
    <CenteredContent>
      <LogoWrap>
        <Logo />
      </LogoWrap>
      <Form>
        <Title>Вход</Title>
        <EmailInput />
        <PasswordInput />
        <Button
          handler={handleSubmit}
          loading={isLoading}
          type="submit"
          variant="primary"
        >
          Войти
        </Button>
        <ToRegister>
          <ToRegisterText>Еще нет аккаунта?</ToRegisterText>
          <PrimaryLink to="sign-up">Зарегистрироваться</PrimaryLink>
        </ToRegister>
      </Form>
    </CenteredContent>
  );
};

const LogoWrap = styled.div`
  position: absolute;
  top: 40px;
`;

const Form = styled.form`
  width: 100%;
  padding: 0 320px;
`;

const Title = styled.h1`
  ${lightTitle};

  margin-bottom: 50px;
`;

const ToRegister = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToRegisterText = styled.span`
  ${greyText};

  margin-right: 10px;
`;

export default SignIn;
