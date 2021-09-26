import React from 'react';
import { Icon } from '@ui-kitten/components';
import i18n from '../config/i18n';

/**
 * Creates an Icon component based on the Eva icon name
 * @param {string} name Icon name from https://akveo.github.io/eva-icons/
 * @returns Icon component
 */
export function EvaIcon(name) {
  return (props) => <Icon {...props} name={name} />;
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
