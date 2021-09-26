import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, AuthContext } from '../providers/AuthProvider';
import MainNavigator from './MainNavigator';
import GuestNavigator from './GuestNavigator';

function AppNavigator() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthContext.Consumer>
          {({ user }) => user ? <MainNavigator /> : <GuestNavigator />}
        </AuthContext.Consumer>
      </NavigationContainer>
    </AuthProvider>
  );
}

export default AppNavigator;
