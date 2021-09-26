import { Divider, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import React from 'react';
import PropTypes from 'prop-types';
import { EvaIcon } from '../../utils';
import { useNavigation } from '@react-navigation/native';

TopNavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  showBackIcon: PropTypes.bool,
};

export default function TopNavigationBar({
  title,
  showBackIcon = false,
}) {
  const navigation = useNavigation();
  const backAction = () => (
    <TopNavigationAction icon={EvaIcon('arrow-back')} onPress={() => navigation.goBack()}/>
  );

  return (
    <>
      <TopNavigation title={title} alignment='center' accessoryLeft={showBackIcon && backAction} />
      <Divider />
    </>
  );
}