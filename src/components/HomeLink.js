import React from 'react';
import { Link } from 'react-router';

import Context from './../Context';

export default class HomeLink extends React.Component {
  render() {
    var router = Context.getInstance().getRouter();

    var homeRoute = router.getHomeRoute();
    var targetPath = homeRoute ? homeRoute.path : '/';

  	return (
      <Link to={targetPath} className={this.props.className}>
        { this.props.children ? this.props.children : 'Home'}
      </Link>
  	);
  }
}
