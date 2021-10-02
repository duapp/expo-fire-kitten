import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { Layout } from '@ui-kitten/components';
import TopNavigationBar from '../components/common/TopNavigationBar';

Screen.propTypes = {
  title: PropTypes.string,
  showBackIcon: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

Screen.defaultProps = {
  title: undefined,
  showBackIcon: false,
  style: undefined,
};

export default function Screen({ title, showBackIcon, style, children }) {
  return (
    <SafeAreaView style={styles.container}>
      {title && <TopNavigationBar title={title} showBackIcon={showBackIcon} />}
      <Layout style={[styles.layout, style]}>{children}</Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  layout: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
});
