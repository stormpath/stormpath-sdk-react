import React from 'react';

import UserComponent from './UserComponent';

export default class UserField extends UserComponent {
  constructor() {
    super(...arguments);
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
