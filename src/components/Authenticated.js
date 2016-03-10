import React from 'react';

import utils from '../utils';

export default class Authenticated extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    var user = this.context.user;
    var authenticated = user !== undefined;

    if (authenticated && this.props.inGroup) {
      if (user.groups) {
        authenticated = utils.isInGroup(user.groups, this.props.inGroup);
      } else {
        console.log(authenticated, user, user.groups);
        utils.logWarning('<Authenticated> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
      }
    }

    return authenticated ? utils.enforceRootElement(this.props.children) : null;
  }
}
