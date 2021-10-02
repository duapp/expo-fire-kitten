import React from 'react';
import { render } from '@testing-library/react-native';
import { Formik } from 'formik';
import { TestRoot } from '../../utils/testing';
import SelectField from '../form/SelectField';

test('it works', () => {
  const options = {
    us: 'United States',
    cn: 'China',
    other: 'Other',
  };
  const placeholder='select';

  const { getByText } = render(
    <TestRoot>
      <Formik>
        <SelectField name="test" label="test" placeholder={placeholder} options={options} />
      </Formik>
    </TestRoot>,
  );

  const input = getByText(placeholder);
  expect(input).toBeEnabled();

  // TODO: complete the test
});
