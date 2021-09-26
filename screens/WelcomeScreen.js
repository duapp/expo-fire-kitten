import { Button, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import i18n from '../config/i18n';
import { EvaIcon } from '../utils';

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Layout style={styles.layout}>
        <Text style={styles.heading} category="h1">{i18n.t('welcome.greeting')}</Text>
        <Button
          style={styles.button}
          status="primary"
          accessoryLeft={EvaIcon('person-outline')}
          onPress={() => navigation.navigate('Login')}
        >
          {i18n.t('welcome.login')}
        </Button>
        <Button
          style={styles.button}
          status="primary"
          accessoryLeft={EvaIcon('plus-outline')}
          onPress={() => navigation.navigate('Register')}
        >
          {i18n.t('welcome.register')}
        </Button>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    marginBottom: 48,
  },
  button: {
    marginTop: 16,
  }
});
