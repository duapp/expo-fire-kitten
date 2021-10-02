/* eslint-disable import/prefer-default-export */
import React from 'react';
import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export function TestRoot(props) {
  const { children } = props;

  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      {children}
    </ApplicationProvider>
  );
}
