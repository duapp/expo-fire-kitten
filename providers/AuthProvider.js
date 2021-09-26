import { Layout, Spinner } from '@ui-kitten/components';
import React, { createContext, useEffect, useState } from 'react';
import firebase from '../config/firebase';

export const AuthContext = createContext({});

export const AuthService = firebase.auth();

export function AuthProvider(props) {
  const [user, setUser] = useState(null);
  const [authPending, setAuthPending] = useState(true);

  useEffect(() => {
    return AuthService.onAuthStateChanged(user => {
      if (user) {
        user.getIdTokenResult().then(({ claims }) => {
          user.isAdmin = Boolean(claims.admin);
          setUser(user);
          setAuthPending(false);
        });
      } else {
        setUser(user);
        setAuthPending(false);
      }
    });
  }, []);

  if (authPending) {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Spinner size="large" />
      </Layout>
    );
  }

  return (
    <AuthContext.Provider value={{
      user,
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};
