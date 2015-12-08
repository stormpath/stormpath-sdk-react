import React from 'react';
import { Link } from 'react-router';

import Context from './../Context';

export default class LoginLink extends React.Component {
  render() {
    var router = Context.getInstance().getRouter();

    var loginRoute = router.getLoginRoute();
    var targetPath = loginRoute ? loginRoute.path : '/login';

  	return (
      <Link to={targetPath} className={this.props.className}>
        { this.props.children ? this.props.children : 'Login'}
      </Link>
  	);
  }
}
