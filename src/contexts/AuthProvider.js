import React, { createContext } from "react";
import { getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const user = { dName: "wahid" };
  const GoogleSingInContext = (provider) => {
    signInWithPopup(auth, provider);
  };

  const authInfo = { user, GoogleSingInContext };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
