import React, { createContext, useEffect, useState } from 'react';
import Loader from '../components/common/Loader';
import firebase from '../config/firebase';

export const AuthContext = createContext({});

export const AuthService = firebase.auth();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [authPending, setAuthPending] = useState(true);

  useEffect(() => {
    return AuthService.onAuthStateChanged(result => {
      if (result) {
        const { displayName, email, uid, photoURL, phoneNumber } = result;
        const currentUser = {
          displayName,
          email,
          uid,
          photoURL,
          phoneNumber,
        };
        // read claims if necessary
        result.getIdTokenResult().then(({ claims }) => {
          currentUser.isAdmin = Boolean(claims.admin);
          setUser(currentUser);
          setAuthPending(false);
        });
      } else {
        setUser();
        setAuthPending(false);
      }
    });
  }, []);

  const { children } = props;

  if (authPending) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
