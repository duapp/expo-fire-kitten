import { Button, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { t, EvaIcon } from '../utils';
import Screen from './Screen';

export default function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <Text style={styles.heading} category="h1">
        {t('welcome.greeting')}
      </Text>
      <Button
        style={styles.button}
        status="primary"
        accessoryLeft={EvaIcon('person-outline')}
        onPress={() => navigation.navigate('Login')}
      >
        {t('welcome.login')}
      </Button>
      <Button
        style={styles.button}
        status="primary"
        accessoryLeft={EvaIcon('plus-outline')}
        onPress={() => navigation.navigate('Register')}
      >
        {t('welcome.register')}
      </Button>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  heading: {
    marginBottom: 48,
  },
  button: {
    marginTop: 16,
  },
});
