import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { mockGoBack } from '@react-navigation/native';
import TopNavigationBar from './TopNavigationBar';
import { TestRoot } from '../../utils/testing';

jest.mock('@react-navigation/native');
jest.mock('../../utils');

test('it has title but no back button', () => {
  const title = 'Test Title';

  const { queryByText, getByText } = render(
    <TestRoot>
      <TopNavigationBar title={title} />
    </TestRoot>,
  );

  expect(getByText(title)).toHaveTextContent(title);
  expect(queryByText('arrow-back')).toBeNull();
});

test('it has back button', () => {
  const title = 'Test Title';

  const { getByText } = render(
    <TestRoot>
      <TopNavigationBar title={title} showBackIcon />
    </TestRoot>,
  );

  expect(getByText(title)).toHaveTextContent(title);

  const backButton = getByText('arrow-back');
  expect(backButton).toBeEnabled();

  fireEvent.press(backButton);
  expect(mockGoBack).toBeCalled();
});
