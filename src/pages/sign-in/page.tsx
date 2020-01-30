import * as React from 'react';
import { useStore } from 'effector-react';
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  Button,
  Icon
} from 'rsuite';

import { routes } from '@lib/constants';
import { CenteredContent, Logo, PrimaryLink } from '@ui';
import {
  validationSchema,
  $formValues,
  $formErrors,
  formChanged,
  formValidated,
  formSubmitted,
  formMounted,
  formUnmounted,
  signInFetching
} from './model';
import s from './styles.pcss';

const SignIn: React.FC = (): JSX.Element => {
  const formRef = React.useRef(null);

  const isLoading = useStore(signInFetching.isLoading);
  const values = useStore($formValues);
  const errors = useStore($formErrors);

  const onSubmit = React.useCallback(() => {
    formRef.current.check();
    formSubmitted();
  }, []);

  React.useEffect(() => {
    formMounted();

    return () => formUnmounted();
  }, []);

  return (
    <CenteredContent>
      <div className={s.logoContainer}>
        <Logo size="large" />
      </div>
      <section className={s.mainWrapper}>
        <h3 className={s.title}>Вход</h3>
        <Form
          ref={formRef}
          onChange={formChanged}
          onCheck={formValidated}
          model={validationSchema}
          formDefaultValue={values}
          formError={errors}
          checkTrigger="blur"
        >
          <FormGroup>
            <ControlLabel htmlFor="email">Email</ControlLabel>
            <FormControl type="email" name="email" errorPlacement="topEnd" />
          </FormGroup>
          <FormGroup>
            <ControlLabel htmlFor="password">Пароль</ControlLabel>
            <FormControl
              type="password"
              name="password"
              errorPlacement="topEnd"
            />
          </FormGroup>
          <Button
            onClick={onSubmit}
            loading={isLoading}
            icon={<Icon icon="sign-in" />}
            size="lg"
            placement="left"
            type="submit"
            appearance="primary"
          >
            Войти
          </Button>
          <div className={s.signUpOption}>
            <span className={s.text}>Еще нет аккаунта?</span>
            <PrimaryLink to={routes.signUp}>Зарегистрируйтесь</PrimaryLink>
          </div>
        </Form>
      </section>
    </CenteredContent>
  );
};

export default SignIn;
