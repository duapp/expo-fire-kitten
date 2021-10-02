/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import { Select, SelectItem } from '@ui-kitten/components';

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  /*
    {
      value1: "text1",
      value2: "text2",
      value3: "text3",
    }
   */
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default function SelectField({ name, label, options, ...props }) {
  const optionsArray = Object.entries(options);
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched /* handleBlur */ } =
    useFormikContext();

  const handleSelect = useCallback(
    item => setFieldValue(name, optionsArray[item.row][0]),
    [name, optionsArray, setFieldValue],
  );
  const handleFocus = () => setFieldTouched(name);

  return (
    <Select
      name={name}
      label={label}
      status={Boolean(meta.error && meta.touched) && 'danger'}
      value={options[field.value]}
      caption={Boolean(meta.error && meta.touched) && String(meta.error)}
      // onBlur={handleBlur}
      onFocus={handleFocus}
      onSelect={handleSelect}
      {...props}
    >
      {optionsArray.map(([value, text]) => (
        <SelectItem key={value} title={text} />
      ))}
    </Select>
  );
}
