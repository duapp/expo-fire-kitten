import { Button, Layout } from '@ui-kitten/components';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Yup from 'yup';
import TopNavigationBar from '../components/common/TopNavigationBar';
import TextField from '../components/form/TextField';
import { AuthService } from '../providers/AuthProvider';
import { useModal } from '../providers/ModalProvider';
import { t } from '../utils';

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
    <SafeAreaView style={styles.container}>
      <TopNavigationBar title={t('login.title')} showBackIcon />
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
                name="email"
                label={t('login.emailLabel')}
                placeholder={t('login.emailHint')}
                disabled={isSubmitting}
              />
              <TextField
                name="password"
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
      </Layout>
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
  form: {
    flex: 1,
    marginTop: 48,
  },
  button: {
    marginTop: 24,
  },
});
