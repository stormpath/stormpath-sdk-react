import React from 'react';
import UserStore from '../stores/UserStore';

export default class UserComponent extends React.Component {
  onChangeListener = null;

  state = {
    user: {}
  };

  onChange() {
    var self = this;
    UserStore.resolveSession(function (err, user) {
      if (self.onChangeListener !== null) {
        self.setState({ user: user });
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
