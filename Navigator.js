import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './screens/HomeScreen';
import { TestScreen } from './screens/TestScreen';
import BottomTabBar from './components/common/BottomTabBar';

const { Navigator, Screen } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TestNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Test" component={TestScreen} />
    </Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
}

function AppNavigator() {
  return (
    <NavigationContainer>
      {/* <TestNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

export default AppNavigator;
