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
  displayName: Yup.string().required().label(t('register.displayNameLabel')),
  email: Yup.string()
    .required()
    .email(t('register.emailError'))
    .label(t('register.emailLabel')),
  password: Yup.string()
    .required()
    .min(6, t('register.passwordError'))
    .label(t('register.passwordLabel')),
});

const initialValues = {
  displayName: '',
  email: '',
  password: '',
};

export default function RegisterScreen() {
  const { showModal } = useModal();
  const handleFormSubmit = async ({ displayName, email, password }) => {
    try {
      const result = await AuthService.createUserWithEmailAndPassword(
        email,
        password,
      );
      await result.user.updateProfile({ displayName });
    } catch ({ message }) {
      showModal(message);
    }
  };

  return (
    <Screen title={t('register.title')} showBackIcon>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, isSubmitting }) => (
          <>
            <TextField
              testID="name-input"
              name="displayName"
              style={styles.field}
              label={t('register.displayNameLabel')}
              placeholder={t('register.displayNameHint')}
              disabled={isSubmitting}
            />
            <TextField
              testID="email-input"
              name="email"
              style={styles.field}
              label={t('register.emailLabel')}
              placeholder={t('register.emailHint')}
              disabled={isSubmitting}
            />
            <TextField
              testID="password-input"
              name="password"
              style={styles.field}
              label={t('register.passwordLabel')}
              placeholder={t('register.passwordHint')}
              disabled={isSubmitting}
              password
            />
            <Button
              style={styles.button}
              status="primary"
              onPress={handleSubmit}
              disabled={isSubmitting}
            >
              {t('register.submit')}
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
