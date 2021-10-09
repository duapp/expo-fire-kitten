import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';
import { Layout, StyleService, useStyleSheet } from '@ui-kitten/components';
import TopNavigationBar from '../components/common/TopNavigationBar';

Screen.propTypes = {
  title: PropTypes.string,
  showBackIcon: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  dark: PropTypes.bool,
};

Screen.defaultProps = {
  title: undefined,
  showBackIcon: false,
  style: undefined,
  dark: false,
};

export default function Screen({ title, showBackIcon, style, dark, children }) {
  const styles = useStyleSheet(themedStyles);
  return (
    <SafeAreaView edges={['left', 'top', 'right']} style={styles.root}>
      {title && <TopNavigationBar title={title} showBackIcon={showBackIcon} />}
      <Layout style={[styles.container, style]} level={dark ? '4' : '1'}>
        {children}
      </Layout>
    </SafeAreaView>
  );
}

const themedStyles = StyleService.create({
  root: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
