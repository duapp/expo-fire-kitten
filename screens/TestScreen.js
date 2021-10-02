import React from 'react';
import { Text } from '@ui-kitten/components';
import { t } from '../utils';
import Screen from './Screen';

export default function TestScreen() {
  return (
    <Screen
      title={t('home.title', { name: 'Test' })}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Text category="h1">{t('home.test')}</Text>
    </Screen>
  );
}
