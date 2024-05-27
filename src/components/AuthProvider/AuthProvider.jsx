/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAuth from "../../hooks/getAuth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = useAuth();

  const loginWithGooglePopUp = () => {
    return signInWithPopup(auth, provider);
  };
  const signUpWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginWithEmailAndPass = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };
  const logOut = () => {
    return signOut(auth);
  };
  onAuthStateChanged(auth, (user) => setUserInfo(user));
  return (
    <AuthContext.Provider
      value={{
        loginWithGooglePopUp,
        signUpWithEmailAndPassword,
        loginWithEmailAndPass,
        logOut,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
