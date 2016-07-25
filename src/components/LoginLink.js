import React from 'react';
import { Link } from 'react-router';

import utils from './../utils';
import context from './../context';

export default class LoginLink extends React.Component {
  render() {
    var router = context.getRouter();
    var loginRoute = router.getLoginRoute();
    var targetPath = (loginRoute || {}).path || '/login';
    var selectedProps = utils.excludeProps(['to', 'children'], this.props);

  	return (
      <Link to={targetPath} {...selectedProps}>
        { this.props.children ? this.props.children : 'Login'}
      </Link>
  	);
  }
}
