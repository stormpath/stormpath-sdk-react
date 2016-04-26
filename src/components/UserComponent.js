import React from 'react';
import utils from '../utils';
import context from '../context';

export default class UserComponent extends React.Component {
  onChangeListener = null;

  constructor() {
    super(...arguments);
    utils.logWarning('The UserComponent class has been deprecated. Please use the user context instead. See: https://github.com/stormpath/stormpath-sdk-react/blob/master/docs/api.md#contexts');
  }

  state = {
    user: {}
  };

  onChange() {
    context.userStore.resolveSession((err, user) => {
      if (this.onChangeListener !== null) {
        this.setState({ user: user });
      }
    });
  }

  componentDidMount() {
    this.onChangeListener = this.onChange.bind(this);
    context.userStore.addChangeListener(this.onChangeListener);
    this.onChange();
  }

  componentWillUnmount() {
    context.userStore.removeChangeListener(this.onChangeListener);
    this.onChangeListener = null;
  }
}
