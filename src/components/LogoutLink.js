import React from 'react';

import context from './../context';
import UserActions from './../actions/UserActions';

export default class LogoutLink extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  state = {
    disabled: false
  };

  _performRedirect() {
    var router = context.getRouter();
    var homeRoute = router.getHomeRoute();
    var loginRoute = router.getLoginRoute();
    var redirectTo = this.props.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

    this.context.router.push(redirectTo);
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
    var selectedProps = utils.excludeProps(['href', 'onClick', 'disabled', 'children'], this.props);

  	return (
      <a href='#' onClick={this.onClick.bind(this)} disabled={this.state.disabled} {...selectedProps}>
        { this.props.children ? this.props.children : 'Logout'}
      </a>
  	);
  }
}
