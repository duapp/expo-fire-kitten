import React from 'react';
import { SafeAreaView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { t } from '../utils';
import TopNavigationBar from '../components/common/TopNavigationBar';

export default function TestScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigationBar title={t('home.test')} />
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>{t('home.test')}</Text>
      </Layout>
    </SafeAreaView>
  );
};
