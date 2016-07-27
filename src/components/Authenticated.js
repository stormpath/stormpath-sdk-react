import React from 'react';
import utils from '../utils';

export default class Authenticated extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    let user = this.context.user;
    let authenticated = user !== undefined;

    if (authenticated && this.props.inGroup) {
      if (user.groups) {
        authenticated = utils.groupsMatchExpression(user.groups, this.props.inGroup);
      } else {
        utils.logWarning('<Authenticated>', 'In order to use the inGroup property, you must expand the groups resource for the /me endpoint.');
      }
    }

    let propsToForward = utils.excludeProps(['inGroup'], this.props);

    return authenticated ? utils.enforceRootElement(this.props.children, propsToForward) : null;
  }
}
