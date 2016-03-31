import React from 'react';

import utils from '../utils';
import UserComponent from './UserComponent';

export default class UserField extends UserComponent {
  constructor() {
    super(...arguments);
    utils.logWarning('The UserField component has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
  }

  _resolveFieldValue(name) {
    var value = this.state.user;
    var keys = name.split('.');

    while (keys.length) {
      var key = keys.shift();

      if (!(key in value)) {
        throw new Error('Field does not exist');
      }

      value = value[key];
    }

    return value;
  }

  render() {
    var fieldName = this.props.fieldName;
    var fieldValue = null;

    try {
      fieldValue = this._resolveFieldValue(fieldName);
    } catch(e) {
      if ('default' in this.props) {
        fieldValue = this.props['default'];
      }
    }

    return (
      <span className={this.props.className}>
        { fieldValue }
      </span>
    );
  }
}
