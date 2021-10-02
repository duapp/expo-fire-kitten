import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { act } from 'react-test-renderer';
import RegisterScreen from './RegisterScreen';
import { TestRoot } from '../utils/testing';
import { AuthService } from '../providers/AuthProvider';

jest.mock('@react-navigation/native');
jest.mock('../providers/AuthProvider');
jest.mock('../utils');

test('it works', async () => {
  const mockName = 'name';
  const mockEmail = 'name@email.com';
  const mockPassword = 'password';

  const { getByText, getByTestId, queryByText } = render(
    <TestRoot withModal>
      <RegisterScreen />
    </TestRoot>,
  );

  const nameInput = getByTestId('name-input');
  const emailInput = getByTestId('email-input');
  const passwordInput = getByTestId('password-input');

  const registerButton = getByText('register.submit');
  expect(registerButton).toBeEnabled();

  await act(async () => {
    fireEvent.press(registerButton);
  });
  expect(
    getByText('register.displayNameLabel is a required field'),
  ).toBeTruthy();
  expect(getByText('register.emailLabel is a required field')).toBeTruthy();
  expect(getByText('register.passwordLabel is a required field')).toBeTruthy();

  await act(async () => {
    await fireEvent.changeText(nameInput, mockName);
    await fireEvent.changeText(emailInput, mockEmail);
    await fireEvent.changeText(passwordInput, mockPassword);
  });

  expect(
    queryByText('register.displayNameLabel is a required field'),
  ).toBeFalsy();
  expect(queryByText('register.emailLabel is a required field')).toBeFalsy();
  expect(queryByText('register.passwordLabel is a required field')).toBeFalsy();

  await act(async () => {
    fireEvent.press(registerButton);
  });
  expect(AuthService.createUserWithEmailAndPassword).toBeCalledWith(
    mockEmail,
    mockPassword,
  );
});
