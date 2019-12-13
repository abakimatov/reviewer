const emailRegexp: RegExp = /.{2,}@.{2,}/;
export const validateEmail = (value: string): string | null => {
  if (value.length === 0) return 'Пожалуйста введите ваш email.';
  if (!emailRegexp.test(value)) return 'Пожалуйста, введите корректный email.';

  return null;
};

const passwordRegexp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d).{8,}$/;
export const validatePassword = (value: string): string | null => {
  if (value.length < 8) return 'Пароль должен содержать не меньше 8 символов.';
  if (!passwordRegexp.test(value))
    return 'Пароль должен содержать заглавные и прописные символы, а также числа.';

  return null;
};

export const validatePasswordsEqual = (
  password: string,
  confirmPassword: string
): string | null => {
  if (password !== confirmPassword)
    return 'Пароль должен совпадать с предыдущим.';

  return null;
};
