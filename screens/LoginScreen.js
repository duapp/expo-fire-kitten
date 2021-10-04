import { Button } from '@ui-kitten/components';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import TextField from '../components/form/TextField';
import { AuthService } from '../providers/AuthProvider';
import { useModal } from '../providers/ModalProvider';
import { t } from '../utils';
import Screen from './Screen';

const schema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email(t('login.emailError'))
    .label(t('login.emailLabel')),
  password: Yup.string().required().label(t('login.passwordLabel')),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const { showModal } = useModal();
  const handleFormSubmit = async ({ email, password }) => {
    try {
      await AuthService.signInWithEmailAndPassword(email, password);
    } catch ({ message }) {
      showModal(message);
    }
  };

  return (
    <Screen title={t('login.title')} showBackIcon>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <>
            <TextField
              testID="email-input"
              name="email"
              style={styles.field}
              label={t('login.emailLabel')}
              placeholder={t('login.emailHint')}
              disabled={isSubmitting}
            />
            <TextField
              testID="password-input"
              name="password"
              style={styles.field}
              label={t('login.passwordLabel')}
              placeholder={t('login.passwordHint')}
              disabled={isSubmitting}
              password
            />
            <Button
              style={styles.button}
              status="primary"
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              {t('login.submit')}
            </Button>
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  field: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  },
});
