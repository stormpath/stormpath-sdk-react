import React from 'react';

import utils from '../utils';

export default class NotAuthenticated extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    var user = this.context.user;
    var authenticated = user !== undefined;

    if (this.props.inGroup) {
      if (authenticated) {
        if (user.groups) {
          authenticated = utils.groupsMatchExpression(user.groups, this.props.inGroup);
        } else {
          utils.logWarning('<NotAuthenticated> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
        }
      } else {
        return null;
      }
    }

    return !authenticated ? utils.enforceRootElement(this.props.children) : null;
  }
}
