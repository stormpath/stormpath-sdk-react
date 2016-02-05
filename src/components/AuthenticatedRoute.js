import { Route } from 'react-router';

import Context from './../Context';
import UserStore from './../stores/UserStore';

export default class AuthenticatedRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      UserStore.isAuthenticated((err, authenticated) => {
        if (!authenticated) {
          var router = Context.getInstance().getRouter();
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
