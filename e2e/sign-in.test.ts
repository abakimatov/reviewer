describe('Signin flow', () => {
  const selectors = {
    form: '[name="sign-in-form"]',
    emailField: '[name="email"]',
    emailError: '[name="email-error"]',
    passwordField: '[name="password"]',
    passwordError: '[name="password-error"]',
    submitButton: 'button[type="submit"]',
    logOutButton: '[data-action="logout"]'
  };

  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
    jest.setTimeout(100000);
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitForSelector(selectors.form);
  });

  test('It should be a empty email and password errors', async () => {
    await page.click(selectors.submitButton);
    await expect(page).toMatchElement(selectors.emailError, {
      text: 'Пожалуйста, введите ваш email.'
    });
    await expect(page).toMatchElement(selectors.passwordError, {
      text: 'Пожалуйста, введите пароль.'
    });
  });

  test('It should be a incorrect email error', async () => {
    const incorrectEmail = 'john.doe';
    await page.type(selectors.emailField, incorrectEmail);
    await page.click(selectors.submitButton);
    await expect(page).toMatchElement(selectors.emailError, {
      text: 'Пожалуйста, введите корректный email.'
    });
  });

  test('It should be a success login and logout', async () => {
    const email = 'test@test.com';
    const password = 'OAJIdomasdmo8adsAO';

    await page.type(selectors.emailField, email);
    await page.type(selectors.passwordField, password);
    await page.click(selectors.submitButton);
    await page.waitFor(3000);
    await page.waitForSelector(selectors.logOutButton);
    await page.click(selectors.logOutButton);
    await page.waitFor(3000);
    await page.waitForSelector(selectors.form);
  });
});
