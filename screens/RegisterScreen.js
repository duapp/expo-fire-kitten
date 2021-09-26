import { Button, Layout } from '@ui-kitten/components';
import { Formik } from 'formik';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import TopNavigationBar from '../components/common/TopNavigationBar';
import TextField from '../components/form/TextField';
import { AuthService } from '../providers/AuthProvider';
import { t } from '../utils';

const schema = Yup.object().shape({
  displayName: Yup.string()
    .required()
    .label(t('register.displayNameLabel')),
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
  const handleFormSubmit = async ({ displayName, email, password}) => {
    try {
      const result = await AuthService.createUserWithEmailAndPassword(email, password);
      await result.user.updateProfile({ displayName });
    } catch ({ message }) {
      Alert.alert('Error', message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={t('register.title')} showBackIcon />
      <Layout style={styles.layout}>
        <Formik
          style={styles.form}
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, isSubmitting }) => (
            <>
              <TextField
                name="displayName"
                style={styles.field}
                label={t('register.displayNameLabel')}
                placeholder={t('register.displayNameHint')}
                disabled={isSubmitting}
              />
              <TextField
                name="email"
                style={styles.field}
                label={t('register.emailLabel')}
                placeholder={t('register.emailHint')}
                disabled={isSubmitting}
              />
              <TextField
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
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  form: {
    flex: 1,
    marginTop: 48,
  },
  field: {
    marginBottom: 16,
  },
  button: {
    marginTop: 24,
  }
});
