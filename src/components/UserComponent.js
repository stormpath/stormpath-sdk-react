import React from 'react';
import UserStore from '../stores/UserStore';

export default class UserComponent extends React.Component {
  onChangeListener = null;

  constructor() {
    super(...arguments);
    console.error('Stormpath SDK: Warning! The UserComponent class has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
  }

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
