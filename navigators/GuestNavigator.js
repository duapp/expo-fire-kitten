import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const { Navigator, Screen } = createNativeStackNavigator();

export default function GuestNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={WelcomeScreen} />
      <Screen name="Register" component={RegisterScreen} />
      <Screen name="Login" component={LoginScreen} />
    </Navigator>
  );
}
