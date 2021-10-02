import { Layout, Spinner } from '@ui-kitten/components';
import React from 'react';

export default function Loader() {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Spinner testID="loader" size="large" />
    </Layout>
  );
}
