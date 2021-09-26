import React from 'react';
import { render } from '@testing-library/react-native';
import BottomTabBar from './BottomTabBar';
import { TestRoot } from '../../utils/testing';

const mockState = {
  index: 0,
  routeNames: ['Home']
};

test('it works', () => {
  const { getByText, toJSON } = render(
    <TestRoot>
      <BottomTabBar state={mockState} />
    </TestRoot>
  );

  expect(getByText('Home')).toBeEnabled();
  expect(toJSON()).toMatchSnapshot();
});
