interface AuthCodes {
  readonly EMAIL_EXIST: string;
  readonly EMAIL_INVALID: string;
  readonly USER_DISABLED: string;
  readonly USER_NOT_FOUND: string;
  readonly WRONG_PASSWORD: string;
}

export const auth: AuthCodes = {
  EMAIL_EXIST: 'auth/email-already-in-use',
  EMAIL_INVALID: 'auth/invalid-email',
  USER_DISABLED: 'auth/user-disabled',
  USER_NOT_FOUND: 'auth/user-not-found',
  WRONG_PASSWORD: 'auth/wrong-password'
};
