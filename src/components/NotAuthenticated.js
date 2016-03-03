import React from 'react';

export default class NotAuthenticated extends React.Component {
  static contextTypes = {
    account: React.PropTypes.object
  };

  render() {
    return this.context.account === undefined ?
      this.props.children : null;
  }
}
