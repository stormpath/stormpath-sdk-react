import ReactRouter from 'react-router';

import Context from './../Context';

import LoginRoute from './LoginRoute';
import LogoutRoute from './LogoutRoute';

export default class Router extends ReactRouter {
  markedRoutes = {
    login: {
      type: LoginRoute,
      props: null
    },
    logout: {
      type: LogoutRoute,
      props: null
    }
  };

  constructor() {
    super(...arguments);
    this._mapMarkedRoutes();
    Context.getInstance().setRouter(this);
  }

  _mapMarkedRoutes() {
    var markedRoutes = this.markedRoutes;

    function getChildren(node) {
      if (!node.props.children || !node.props.children.props || !node.props.children.props.children) {
        return [];
      }
      return node.props.children.props.children;
    }

    function walk(node) {
      // Try and map the node to a marked route
      for (var routeName in markedRoutes) {
        var route = markedRoutes[routeName];
        if (node.type == route.type) {
          markedRoutes[routeName].props = node.props;
          break;
        }
      }

      // Walk children
      getChildren(node).forEach(walk);
    }

    walk(this);
  }

  getLoginRoute() {
    return this.markedRoutes.login.props;
  }

  getLogoutRoute() {
    return this.markedRoutes.logout.props;
  }
}
