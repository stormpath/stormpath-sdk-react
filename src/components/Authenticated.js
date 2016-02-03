import React from 'react';
import UserStore from './../stores/UserStore';

export default class Authenticated extends React.Component {
  onChangeListener = null;

  state = {
    authenticated: null
  };

  constructor() {
    super();
  }

  onChange() {
    UserStore.isAuthenticated((err, authenticated) => {
      if (this.onChangeListener !== null) {
        this.setState({ authenticated: authenticated === true });
      }
    });
  }

  componentWillMount() {
    this.onChangeListener = this.onChange.bind(this);
    UserStore.addChangeListener(this.onChangeListener);
    this.onChange();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChangeListener);
    this.onChangeListener = null;
  }

  render() {
    return this.state.authenticated === true ?
      this.props.children : null;
  }
}
