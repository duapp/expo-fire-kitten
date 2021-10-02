import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import LoginScreen from './LoginScreen';
import { TestRoot } from '../utils/testing';
import { AuthService } from '../providers/AuthProvider';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
jest.mock('@react-navigation/native');
jest.mock('../providers/AuthProvider');
jest.mock('../utils');

test('it works', async () => {
  const mockEmail = 'name@email.com';
  const mockPassword = 'password';

  const { getByText, getByTestId, queryByText } = render(
    <TestRoot withModal>
      <LoginScreen />
    </TestRoot>,
  );

  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');

  const loginButton = getByText('login.submit');
  expect(loginButton).toBeEnabled();

  await act(async () => {
    fireEvent.press(loginButton);
  });
  expect(getByText('login.emailLabel is a required field')).toBeTruthy();
  expect(getByText('login.passwordLabel is a required field')).toBeTruthy();

  await act(async () => {
    await fireEvent.changeText(emailInput, mockEmail);
    await fireEvent.changeText(passwordInput, mockPassword);
  });

  expect(queryByText('login.emailLabel is a required field')).toBeFalsy();
  expect(queryByText('login.passwordLabel is a required field')).toBeFalsy();

  await act(async () => {
    fireEvent.press(loginButton);
  });
  expect(AuthService.signInWithEmailAndPassword).toBeCalledWith(
    mockEmail,
    mockPassword,
  );
});
