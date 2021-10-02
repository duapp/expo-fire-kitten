import React from 'react';
import { render } from '@testing-library/react-native';
import { TestRoot } from '../../utils/testing';
import Loader from './Loader';

test('it works', () => {
  const { getByTestId } = render(
    <TestRoot>
      <Loader />
    </TestRoot>,
  );

  expect(getByTestId('loader')).toBeTruthy();
});
