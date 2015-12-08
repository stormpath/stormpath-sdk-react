import React from 'react';
import { Link } from 'react-router';

import Context from './../Context';

export default class LogoutLink extends React.Component {
  render() {
    var router = Context.getInstance().getRouter();

    var logoutRoute = router.getLogoutRoute();
    var targetPath = logoutRoute ? logoutRoute.path : '/logout';

  	return (
      <Link to={targetPath} className={this.props.className}>
        { this.props.children ? this.props.children : 'Logout'}
      </Link>
  	);
  }
}
