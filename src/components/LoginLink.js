import React from 'react';
import { Link } from 'react-router';

import context from './../context';

export default class LoginLink extends React.Component {
  render() {
    var router = context.getRouter();
    var loginRoute = router.getLoginRoute();
    var targetPath = (loginRoute || {}).path || '/login';

  	return (
      <Link to={targetPath} className={this.props.className}>
        { this.props.children ? this.props.children : 'Login'}
      </Link>
  	);
  }
}
