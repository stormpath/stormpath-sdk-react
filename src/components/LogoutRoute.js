import React from 'react';
import ReactRouter, { Route } from 'react-router';

import Context from './../Context';
import UserActions from './../actions/UserActions';

export default class LogoutRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      var router = Context.getInstance().getRouter();

      var loginRoute = router.getLoginRoute();
      var redirectTo = (loginRoute ? loginRoute.path : this.redirectTo) || '/';

      UserActions.logout(function () {
        replaceState({ nextPathname: nextState.location.pathname }, redirectTo);
        callback();
      });
    }
  }
}
