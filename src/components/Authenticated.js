import React from 'react';

export default class Authenticated extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return this.context.user !== undefined ?
      this.props.children : null;
  }
}
