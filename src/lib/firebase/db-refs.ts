import { collections } from '@lib/constants';
import { db, firebase } from './firebase-app';

export const teamsRef: firebase.firestore.CollectionReference = db.collection(
  collections.teams
);
