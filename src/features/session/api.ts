import { auth } from 'firebase';

import { firebaseApp } from '@lib/firebase';

export const createUser = async (email: string, password: string) => {
  const persistence = auth.Auth.Persistence.LOCAL;

  await firebaseApp.auth().setPersistence(persistence);
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};
