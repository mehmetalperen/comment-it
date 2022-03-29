import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false); //we need this bc firebase is doing some work with localstorage: setting the current user, etc.
    });
    return unsubsribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
