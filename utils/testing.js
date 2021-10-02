/* eslint-disable import/prefer-default-export */
import React from 'react';
import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ModalProvider } from '../providers/ModalProvider';

export function TestRoot(props, withModal = false) {
  const { children } = props;

  return (
    <ApplicationProvider mapping={mapping} theme={light}>
      {withModal ? <ModalProvider>{children}</ModalProvider> : { children }}
    </ApplicationProvider>
  );
}
