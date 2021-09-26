import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import i18n from './config/i18n';
import firebaseApp from './config/firebase';

export default function App() {
  console.log(firebaseApp);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text category="h1">{i18n.t('homeTest')}</Text>
      </Layout>
    </ApplicationProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
