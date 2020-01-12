import faker from 'faker';

describe('Signup flow', () => {
  const selectors = {
    form: '[data-test-id="sign-up-form"]',
    emailField: '[name="email"]',
    emailError: '[name="email-error"]',
    passwordField: '[name="password"]',
    passwordError: '[name="password-error"]',
    confirmPasswordField: '[name="confirmPassword"]',
    confirmPasswordError: '[name="confirmPassword-error"]',
    submitButton: 'button[type="submit"]',
    logOutButton: '[data-action="logout"]'
  };

  beforeEach(() => {
    cy.visit('/sign-up');
  });

  it('should be a render form success', () => {
    cy.get(selectors.form);
  });

  it('should be fill form success', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const confirmPassword = password;

    cy.get(selectors.emailField)
      .type(email)
      .should('have.value', email);
    cy.get(selectors.passwordField)
      .type(password)
      .should('have.value', password);
    cy.get(selectors.confirmPasswordField)
      .type(confirmPassword)
      .should('have.value', confirmPassword);
  });

  it('should be a empty email error', () => {
    const password = faker.internet.password();

    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPasswordField).type(password);
    cy.get(selectors.submitButton).click();
    cy.get(selectors.emailError).should(
      'have.text',
      'Пожалуйста, введите ваш email.'
    );
  });

  it('should be a email validation error', () => {
    const incorrectEmail = 'john.doe';
    const password = faker.internet.password();

    cy.get(selectors.emailField).type(incorrectEmail);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPasswordField).type(password);
    cy.get(selectors.submitButton).click();
    cy.get(selectors.emailError).should(
      'have.text',
      'Пожалуйста, введите корректный email.'
    );
  });

  it('should be a empty password and email error', () => {
    cy.get(selectors.submitButton).click();
    cy.get(selectors.emailError).should(
      'have.text',
      'Пожалуйста, введите ваш email.'
    );
    cy.get(selectors.passwordError).should(
      'have.text',
      'Пароль должен содержать не меньше 8 символов.'
    );
  });

  it('should be a password validation error', () => {
    const email = faker.internet.email();
    const password = 'diasjdihhfa';

    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPasswordField).type(password);
    cy.get(selectors.submitButton).click();
    cy.get(selectors.passwordError).should(
      'have.text',
      'Пароль должен содержать заглавные и прописные символы, а также числа.'
    );
  });

  it('should be confirm password equal error', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();

    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.submitButton).click();
    cy.get(selectors.confirmPasswordError).should(
      'have.text',
      'Пароль должен совпадать с предыдущим.'
    );
  });

  it('should be success signup, then logout and fail signup using equal credentials', () => {
    const { baseUrl } = Cypress.config();
    const email = faker.internet.email();
    const password = 'ASDKosakdpasadjJ23242';

    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPasswordField).type(password);
    cy.get(selectors.submitButton).click();

    cy.url().should('eq', `${baseUrl}teams`);
    cy.get(selectors.logOutButton).click();

    cy.url().should('eq', baseUrl);
    cy.visit('/sign-up');

    cy.url().should('eq', `${baseUrl}sign-up`);
    cy.get(selectors.emailField).type(email);
    cy.get(selectors.passwordField).type(password);
    cy.get(selectors.confirmPasswordField).type(password);
    cy.get(selectors.submitButton).click();
    cy.url().should('eq', `${baseUrl}sign-up`);
  });
});
