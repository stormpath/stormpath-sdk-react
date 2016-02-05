import React from 'react';
import UserStore from '../stores/UserStore';

export default class UserComponent extends React.Component {
  onChangeListener = null;

  state = {
    user: {}
  };

  onChange() {
    UserStore.resolveSession((err, user) => {
      if (this.onChangeListener !== null) {
        this.setState({ user: user });
      }
    });
  }

  componentDidMount() {
    this.onChangeListener = this.onChange.bind(this);
    UserStore.addChangeListener(this.onChangeListener);
    this.onChange();
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this.onChangeListener);
    this.onChangeListener = null;
  }
}
