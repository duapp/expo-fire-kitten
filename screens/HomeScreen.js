import React from 'react';
import { Button } from '@ui-kitten/components';
import { AuthService } from '../providers/AuthProvider';
import i18n from '../config/i18n';
import Screen from './Screen';
import { t } from '../utils';

export default function HomeScreen() {
  return (
    <Screen
      title={t('home.title', { name: 'Home' })}
      style={{ justifyContent: 'center', alignItems: 'center' }}
    >
      <Button onPress={() => AuthService.signOut()}>
        {i18n.t('home.logout')}
      </Button>
    </Screen>
  );
}
