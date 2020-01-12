describe('Sign-in flow', () => {
  const selectors = {
    form: '[name="sign-in-form"]',
    emailField: '[name="email"]',
    emailError: '[name="email-error"]',
    passwordField: '[name="password"]',
    passwordError: '[name="password-error"]',
    submitButton: 'button[type="submit"]',
    logOutButton: '[data-action="logout"]'
  };

  beforeEach(() => {
    cy.visit('/');
  });

  it('should be a signin form render success', () => {
    cy.get(selectors.form);
  });

  it('should be a inputs text enter success', () => {
    const email = 'john.doe@gmail.com';
    const password = 'kD*J8jf*OJipjf9S';

    cy.get(selectors.emailField)
      .type(email)
      .should('have.value', email);
    cy.get(selectors.passwordField)
      .type(password)
      .should('have.value', password);
  });

  it('should be empty email and password errors', () => {
    cy.get(selectors.submitButton).click();
    cy.get(selectors.emailError).should(
      'have.text',
      'Пожалуйста, введите ваш email.'
    );
    cy.get(selectors.passwordError).should(
      'have.text',
      'Пожалуйста, введите пароль.'
    );
  });

  it('should be incorrect email error', () => {
    const incorrectEmail = 'john.doe';

    cy.get(selectors.emailField).type(incorrectEmail);
    cy.get(selectors.submitButton).click();
    cy.get(selectors.emailError).should(
      'have.text',
      'Пожалуйста, введите корректный email.'
    );
  });

  it('should be success login and then success logout', () => {
    cy.fixture('test-acc.json').then(testAcc => {
      cy.get(selectors.emailField).type(testAcc.email);
      cy.get(selectors.passwordField).type(testAcc.password);
      cy.get(selectors.submitButton).click();

      cy.get(selectors.logOutButton).click();

      cy.get(selectors.form);
    });
  });
});
