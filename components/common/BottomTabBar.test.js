import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import BottomTabBar from './BottomTabBar';
import { TestRoot } from '../../utils/testing';

const mockState = {
  index: 0,
  routeNames: ['Home', 'Test'],
};

test('it works', () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
    state: mockState,
  };
  const { getByText /* , toJSON */ } = render(
    <TestRoot>
      <BottomTabBar navigation={props.navigation} state={props.state} />
    </TestRoot>,
  );

  // thorough tests do not need snapshot testing
  // expect(toJSON()).toMatchSnapshot();

  const otherTab = getByText('Test');
  expect(otherTab).toBeEnabled();

  fireEvent.press(otherTab);
  expect(props.navigation.navigate).toBeCalledWith(mockState.routeNames[1]);
});
