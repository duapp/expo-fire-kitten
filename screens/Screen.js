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
    <Layout style={styles.root}>
      {title && (
        <SafeAreaView>
          <TopNavigationBar title={title} showBackIcon={showBackIcon} />
        </SafeAreaView>
      )}
      <Layout style={[styles.container, style]}>{children}</Layout>
    </Layout>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
