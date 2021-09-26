import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

export function TestRoot(props) {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {props.children}
    </ApplicationProvider>
  );
}
