import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BottomTabBar({ navigation, state }) {
  return (
    <SafeAreaView edges={['bottom']}>
      <BottomNavigation
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
      >
        <BottomNavigationTab title="Home" />
        <BottomNavigationTab title="Test" />
      </BottomNavigation>
    </SafeAreaView>
  );
}
