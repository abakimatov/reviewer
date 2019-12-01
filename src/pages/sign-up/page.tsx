import * as React from 'react';
import { useStore } from 'effector-react';

import { styled } from '@theme';
import { CenteredContent, Logo, SimpleInput, InputLabel, Button, darkTitle } from '@ui';

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
  formSubmitted
} from './model';

const handleSubmit = (event: React.SyntheticEvent): void => {
  event.preventDefault();
  formSubmitted();
};

const SignUp: React.FC = () => {
  const email = useStore($email);
  const emailError = useStore($emailError);
  const password = useStore($password);
  const passwordError = useStore($passwordError);
  const confirmPassword = useStore($confirmPassword);
  const confirmPasswordError = useStore($confirmPasswordError);
  const isSubmitEnabled = useStore($isSubmitEnabled);

  return (
    <CenteredContent>
      <LogoWrap>
        <Logo />
      </LogoWrap>

      <Form>
        <Title>Регистрация</Title>
        <InputLabel htmlFor="email">Email</InputLabel>
        <SimpleInput
          type="email"
          id="email"
          value={email}
          error={emailError}
          handleChange={emailChanged}
        />
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <SimpleInput
          type="password"
          id="password"
          value={password}
          error={passwordError}
          handleChange={passwordChanged}
        />
        <InputLabel htmlFor="confirmPassword">Подтверждение пароля</InputLabel>
        <SimpleInput
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          error={confirmPasswordError}
          handleChange={confirmPasswordChanged}
        />
        <Button type="submit" disabled={!isSubmitEnabled} handler={handleSubmit}>
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
