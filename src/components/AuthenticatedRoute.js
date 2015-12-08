import { Route } from 'react-router';

import Context from './../Context';
import UserStore from './../stores/UserStore';

export default class AuthenticatedRoute extends Route {
  static defaultProps = {
    onEnter(nextState, replaceState, callback) {
      var router = Context.getInstance().getRouter();

      var loginRoute = router.getLoginRoute();
      var redirectTo = (loginRoute ? loginRoute.path : this.redirectTo) || '/';

      UserStore.isAuthenticated(function (err, authenticated) {
        if (err || !authenticated) {
          replaceState({ nextPathname: nextState.location.pathname }, redirectTo);
        }
        callback();
      });
    }
  }
}
