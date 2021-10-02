import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import WelcomeScreen from './WelcomeScreen';
import { TestRoot } from '../utils/testing';

jest.mock('@react-navigation/native');
jest.mock('../utils');

test('it works', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  const { getByText } = render(
    <TestRoot>
      <WelcomeScreen navigation={navigation} />
    </TestRoot>,
  );

  expect(getByText('welcome.greeting')).toBeEnabled();

  const loginButton = getByText('welcome.login');
  expect(loginButton).toBeEnabled();

  fireEvent.press(loginButton);
  expect(navigation.navigate).toBeCalled();

  const registerButton = getByText('welcome.register');
  expect(registerButton).toBeEnabled();

  fireEvent.press(registerButton);
  expect(navigation.navigate).toBeCalled();
});
