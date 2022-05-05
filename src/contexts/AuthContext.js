import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase/compat";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // const signup = (email, password, username) => {
  //   return auth
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((result) => {
  //       return result.user.updateProfile({
  //         displayName: username,
  //       });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // };

  const signInWithGoogle = () => {
    let googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  // const login = (email, password) => {
  //   return auth.signInWithEmailAndPassword(email, password);
  // };
  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false); //we need this bc firebase is doing some work with localstorage: setting the current user, etc.
    });
    return unsubsribe;
  }, []);

  const value = {
    currentUser,
    //login,
    //signup,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}
