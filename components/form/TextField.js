/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useField, useFormikContext } from 'formik';
import { Input } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';
import { EvaIcon } from '../../utils';

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  password: PropTypes.bool,
};
TextField.defaultProps = {
  password: false,
};

export default function TextField({ name, label, password = false, ...props }) {
  const [secureTextEntry, setSecureTextEntry] = useState(password);
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched, handleBlur } = useFormikContext();

  const handleChangeText = useCallback(
    text => setFieldValue(name, text),
    [name, setFieldValue],
  );
  const handleFocus = () => setFieldTouched(name);

  const renderSecureIcon = props => (
    <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
      {EvaIcon(secureTextEntry ? 'eye-off' : 'eye')(props)}
    </TouchableOpacity>
  );

  return (
    <Input
      name={name}
      label={label}
      status={Boolean(meta.error && meta.touched) && 'danger'}
      value={String(field.value)}
      caption={Boolean(meta.error && meta.touched) && String(meta.error)}
      secureTextEntry={secureTextEntry}
      accessoryRight={password && renderSecureIcon}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChangeText={handleChangeText}
      {...props}
    />
  );
}
