import React from 'react';
import { Text } from 'react-native';

/**
 * Mock icon helper to use text instead of icon for testing purpose
 * @param {string} name Icon name
 * @returns Text element with the icon name
 */
export function EvaIcon(name) {
  return () => <Text>{name}</Text>;
}

/**
 * Mock translation helper to simply return the key for testing purpose
 * @param {string | string[]} scope
 * @returns Simple translation key
 */
export function t(scope) {
  return scope;
}

/**
 * Mock helper to return the mock data for the db path
 * @param {string} path in Realtime DB
 * @returns {object} value
 */
export function read(path) {
  return new Promise(resolve => {
    resolve({
      value: path,
    });
  });
}
