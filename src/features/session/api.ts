import { firebase } from '@lib/firebase';

export const createUser = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signInUser = async (
  email: string,
  password: string
): Promise<firebase.auth.UserCredential> => {
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOutUser = (): Promise<void> => {
  return firebase.auth().signOut();
};
