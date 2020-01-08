import faker from 'faker';

const fillForm = async ({
  email,
  password,
  confirmPassword
}: {
  [key: string]: string;
}) => {
  await page.type('[name="email"]', email);
  await page.type('[name="password"]', password);
  await page.type('[name="confirmPassword"]', confirmPassword);
};

describe('SignUp flow', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000/sign-up');
  });

  beforeEach(async () => {
    await page.reload();
    await page.waitForSelector('[data-test-id="sign-up-form"]');
  });

  test('Fill form should be correctly', async () => {
    const signUpData = {
      email: 'john.doe@gmail.com',
      password: 'ASDKosakdpasadjJ23242',
      confirmPassword: 'ASDKosakdpasadjJ23242'
    };

    await expect(page).toFillForm('[data-test-id="sign-up-form"]', signUpData);
  });

  test('Should be email empty error', async () => {
    const email = '';
    const password = 'ASDKosakdpasadjJ23242';
    const confirmPassword = 'ASDKosakdpasadjJ23242';

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="email-error"]', {
      text: 'Пожалуйста введите ваш email.'
    });
  });

  test('Should be email validation error', async () => {
    const email = 'john.doe';
    const password = 'ASDKosakdpasadjJ23242';
    const confirmPassword = 'ASDKosakdpasadjJ23242';

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="email-error"]', {
      text: 'Пожалуйста, введите корректный email.'
    });
  });

  test('Should be password empty error', async () => {
    const email = 'john.doe@gmail.com';
    const password = '';
    const confirmPassword = 'ASDKosakdpasadjJ23242';

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="password-error"]', {
      text: 'Пароль должен содержать не меньше 8 символов.'
    });
  });

  test('Should be password validation error', async () => {
    const email = 'john.doe@gmail.com';
    const password = 'diasjdihhfa';
    const confirmPassword = 'ASDKosakdpasadjJ23242';

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="password-error"]', {
      text:
        'Пароль должен содержать заглавные и прописные символы, а также числа.'
    });
  });

  test('Should be confirmPassword equal error', async () => {
    const email = 'john.doe@gmail.com';
    const password = 'diasjdihhfa';
    const confirmPassword = 'ASDKosakdpasadjJ23242';

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await expect(page).toMatchElement('[name="confirmPassword-error"]', {
      text: 'Пароль должен совпадать с предыдущим.'
    });
  });
});

describe('Sign up account which created before', () => {
  const email = faker.internet.email();
  const password = 'ASDKosakdpasadjJ23242';
  const confirmPassword = 'ASDKosakdpasadjJ23242';

  beforeAll(() => {
    jest.setTimeout(100000);
  });

  beforeEach(async () => {
    await page.reload();
  });

  test('Should be able a sign up success', async () => {
    await page.waitForSelector('[data-test-id="sign-up-form"]');
    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await page.on('requestfinished', () => {});
    await page.on('requestfinished', () => {});
    await page.waitForNavigation();

    const url = await page.url();
    await expect(url).toBe('http://localhost:3000/teams');
  });

  test('Should be successful logout', async () => {
    await page.waitFor(2000);
    await page.waitForSelector('button[data-action="logout"]');
    await page.click('button[data-action="logout"]');
    await page.waitFor(4000);

    const url = await page.url();

    expect(url).toBe('http://localhost:3000/');
  });

  test('Should be able a sign up fail', async () => {
    await page.goto('http://localhost:3000/sign-up');
    await page.waitForSelector('[data-test-id="sign-up-form');

    await fillForm({ email, password, confirmPassword });
    await page.click('button[type="submit"]');
    await page.on('requestfinished', () => {});
    await page.on('requestfinished', () => {});
    await page.waitFor(4000);

    const url = await page.url();
    await expect(url).toBe('http://localhost:3000/sign-up');
  });
});
