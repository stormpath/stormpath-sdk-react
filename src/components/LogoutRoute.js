import React from 'react';
import ReactRouter, { Route } from 'react-router';

import context from './../context';
import UserActions from './../actions/UserActions';

export default class LogoutRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replace, callback) {
      UserActions.logout(() => {
        var router = context.getRouter();
        var homeRoute = router.getHomeRoute();
        var loginRoute = router.getLoginRoute();
        var redirectTo = this.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

        replace(redirectTo);

        callback();
      });
    }
  };
}
