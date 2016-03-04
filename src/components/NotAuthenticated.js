import React from 'react';

export default class NotAuthenticated extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return this.context.user === undefined ?
      this.props.children : null;
  }
}
