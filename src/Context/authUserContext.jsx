import { createContext, useContext, useState } from "react";
import { Auth } from "../firebase/firebase";
const AUthContext = createContext();

export function useAuth() {
  return useContext(AUthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signUp(email, password) {
    return Auth.createUserWithEmailAndPassword(email, password);
  }

  Auth.onAuthStateChange;
  const value = {
    currentUser,
  };
  return <AUthContext.Provider value={value}>{children}</AUthContext.Provider>;
}
