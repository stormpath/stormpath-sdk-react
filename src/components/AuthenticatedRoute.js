import { Route } from 'react-router';

import context from './../context';

export default class AuthenticatedRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      context.userStore.isAuthenticated({
        inGroup: this.inGroup
      }, (err, authenticated) => {
        if (!authenticated) {
          var router = context.getRouter();
          var homeRoute = router.getHomeRoute();
          var loginRoute = router.getLoginRoute();
          var redirectTo = (loginRoute || {}).path || (homeRoute || {}).path || '/';

          replaceState({ nextPathname: nextState.location.pathname }, redirectTo);
        }
        callback();
      });
    }
  };
}
