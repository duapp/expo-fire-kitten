import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from 'react-native';
import Screen from './Screen';
import { TestRoot } from '../utils/testing';

jest.mock('@react-navigation/native');
jest.mock('../utils');

test('it works without title', () => {
  const text = 'test';
  const { getByText } = render(
    <TestRoot>
      <Screen>
        <Text>{text}</Text>
      </Screen>
    </TestRoot>,
  );

  const content = getByText(text);
  expect(content).toBeEnabled();
});

test('it works with title', () => {
  const text = 'test';
  const title = 'title';
  const { getByText } = render(
    <TestRoot>
      <Screen title={title}>
        <Text>{text}</Text>
      </Screen>
    </TestRoot>,
  );

  const appTitle = getByText(title);
  expect(appTitle).toBeEnabled();

  const content = getByText(text);
  expect(content).toBeEnabled();
});
