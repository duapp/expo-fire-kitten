import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';
import BottomTabBar from '../components/common/BottomTabBar';


const { Navigator, Screen } = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Test" component={TestScreen} />
    </Navigator>
  );
}
