const emailRegexp: RegExp = /.{2,}@.{2,}/;
export const validateEmail = (value: string): string | null => {
  if (value.length === 0) return 'Пожалуйста, введите ваш email.';
  if (!emailRegexp.test(value)) return 'Пожалуйста, введите корректный email.';

  return null;
};

const passwordRegexp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d).{8,}$/;
export const validatePassword = (value: string): boolean =>
  passwordRegexp.test(value);

export const validatePasswordsEqual = (
  password: string,
  confirmPassword: string
): string | null => {
  if (password !== confirmPassword)
    return 'Пароль должен совпадать с предыдущим.';

  return null;
};
