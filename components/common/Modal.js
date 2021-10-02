import {
  Button,
  Card,
  Modal as KittenModal,
  Text,
} from '@ui-kitten/components';
import { t } from 'i18n-js';
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

Modal.propTypes = {
  modal: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default function Modal({ modal, closeModal }) {
  const handleClose = () => closeModal();

  return (
    <KittenModal
      visible
      backdropStyle={styles.backdrop}
      // onBackdropPress={() => handleClose()}
    >
      <Card disabled style={styles.card}>
        <Text style={styles.message}>{modal}</Text>
        <Button onPress={() => handleClose()}>{t('common.ok')}</Button>
      </Card>
    </KittenModal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  card: {
    padding: 4,
  },
  message: {
    marginVertical: 16,
  },
});
