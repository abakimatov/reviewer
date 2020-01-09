import faker from 'faker';

describe('Signin flow', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/');
    jest.setTimeout(100000);
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitForSelector('form[name="sign-in-form"]');
  });

  test('It should be a empty email and password errors', async () => {
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="email-error"]', {
      text: 'Пожалуйста, введите ваш email.'
    });
    await expect(page).toMatchElement('[name="password-error"]', {
      text: 'Пожалуйста, введите пароль.'
    });
  });

  test('It should be a incorrect email error', async () => {
    const incorrectEmail = 'john.doe';
    await page.type('input[name="email"]', incorrectEmail);
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="email-error"]', {
      text: 'Пожалуйста, введите корректный email.'
    });
  });

  test('It should be a success login and logout', async () => {
    const email = 'test@test.com';
    const password = 'OAJIdomasdmo8adsAO';

    await page.type('input[name="email"]', email);
    await page.type('input[name="password"]', password);
    await page.click('button[type="submit"]');
    await page.waitFor(3000);
    await page.waitForSelector('button[data-action="logout"]');
    await page.click('button[data-action="logout"]');
    await page.waitFor(3000);
    await page.waitForSelector('form[name="sign-in-form"]');
  });
});
