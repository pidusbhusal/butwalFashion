import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export async function  doSignInWithEmailAndPassword  (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
  
};

export const doSignOut = () => {
  return auth.signOut();
};
