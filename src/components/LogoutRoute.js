import React from 'react';
import ReactRouter, { Route } from 'react-router';

import Context from './../Context';
import UserActions from './../actions/UserActions';

export default class LogoutRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      UserActions.logout(() => {
        var router = Context.getInstance().getRouter();
        var homeRoute = router.getHomeRoute();
        var loginRoute = router.getLoginRoute();
        var redirectTo = this.redirectTo || (homeRoute || {}).path || (loginRoute || {}).path || '/';

        replaceState({ nextPathname: nextState.location.pathname }, redirectTo);

        callback();
      });
    }
  };
}
