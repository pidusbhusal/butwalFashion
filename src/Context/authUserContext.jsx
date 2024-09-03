import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export default function useAuth() {
  return useContext(authContext);
}

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  
=======
>>>>>>> 741cd2d9f953500e917e2ca439efb6a79017bfa5
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  const value = { currentUser, userLoggedIn, loading };

  return (
    <authContext.Provider value={value}>
      {!loading && children}
    </authContext.Provider>
  );
};
