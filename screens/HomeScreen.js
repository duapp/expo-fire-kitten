import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { AuthService } from '../providers/AuthProvider';
import i18n from '../config/i18n';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={() => AuthService.signOut()}>{i18n.t('home.logout')}</Button>
      </Layout>
    </SafeAreaView>
  );
};
