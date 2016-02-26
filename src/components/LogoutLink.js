import React from 'react';
import ReactMixin from 'react-mixin';
import { History } from 'react-router';

import Context from './../Context';
import UserActions from './../actions/UserActions';

@ReactMixin.decorate(History)
export default class LogoutLink extends React.Component {
  state = {
    disabled: false
  };

  _performRedirect() {
    var router = Context.getInstance().getRouter();
    var homeRoute = router.getHomeRoute();
    var loginRoute = router.getLoginRoute();
    var redirectTo = this.props.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

    this.history.pushState(null, redirectTo);
  }

  onClick(e) {
    e.preventDefault();

    if (!this.state.disabled) {
      this.setState({ disabled: true });

      UserActions.logout(() => {
        this._performRedirect();
      });
    }
  }

  render() {
  	return (
      <a  href='#' className={this.props.className} onClick={this.onClick.bind(this)} disabled={this.state.disabled}>
        { this.props.children ? this.props.children : 'Logout'}
      </a>
  	);
  }
}
