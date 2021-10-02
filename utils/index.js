import React from 'react';
import { Icon } from '@ui-kitten/components';
import i18n from '../config/i18n';
import firebase from '../config/firebase';

/**
 * Creates an Icon component based on the Eva icon name
 * @param {string} name Icon name from https://akveo.github.io/eva-icons/
 * @returns Icon component
 */
export function EvaIcon(name) {
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return props => <Icon {...props} name={name} />;
}

/**
 * Alias for i18n.t: get translation string
 * @param {string | string[]} scope translation key
 * @param {object} options translation options
 * @returns {string} translated string
 */
export function t(scope, options) {
  return i18n.t(scope, options);
}

/**
 * Read data from Firebase Realtime DB by the path
 * @param {string} path
 * @returns {object} object value at the path
 */
export async function read(path) {
  const ref = firebase.database().ref();
  const snapshot = await ref.child(path).get();
  return snapshot.val();
}
