import React from 'react';
import Authenticated from './Authenticated';

export default class NotAuthenticated extends Authenticated {
  render() {
    return this.state.authenticated === false ?
      this.props.children : null;
  }
}