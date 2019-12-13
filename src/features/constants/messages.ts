import { auth } from './error-codes';

type MapElement = [string, string];

type MapStruct = MapElement[];

const messages: MapStruct = [
  [auth.EMAIL_EXIST, 'Данный email уже занят'],
  [auth.EMAIL_INVALID, 'Указан некорректный email'],
  [
    auth.USER_DISABLED,
    'Данный пользователь заблокирован, свяжитесь со службой поддержки.'
  ],
  [auth.USER_NOT_FOUND, 'Пользователь с данным email не найден.'],
  [auth.WRONG_PASSWORD, 'Введен неверный пароль.'],
  ['default', 'Произошла непредвиденная ошибка. Попробуйте позже.']
];

export const authErrors: Map<string, string> = new Map<string, string>(
  messages
);
