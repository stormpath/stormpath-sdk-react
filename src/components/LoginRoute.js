import { Route } from 'react-router';

import context from './../context';

export default class LoginRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      context.userStore.isAuthenticated((err, authenticated) => {
        if (authenticated) {
          var router = context.getRouter();
          var homeRoute = router.getHomeRoute();
          var authenticatedHomeRoute = router.getAuthenticatedHomeRoute();
          var redirectTo = (authenticatedHomeRoute || {}).path || (homeRoute || {}).path || '/';

          replaceState({ nextPathname: nextState.location.pathname }, redirectTo);
        }
        callback();
      });
    }
  };
}
