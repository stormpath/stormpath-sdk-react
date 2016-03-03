import React from 'react';
import { Router as ReactRouter } from 'react-router';

import utils from './../utils';
import context from './../context';

import HomeRoute from './HomeRoute';
import LoginRoute from './LoginRoute';
import LogoutRoute from './LogoutRoute';
import AuthenticatedRoute from './AuthenticatedRoute';

export default class Router extends ReactRouter {
  static childContextTypes = {
    authenticated: React.PropTypes.bool,
    account: React.PropTypes.object
  };

  state = {
    authenticated: false,
    account: undefined
  };

  markedRoutes = {
    home: {
      type: HomeRoute,
      authenticated: {
        props: null
      },
      notAuthenticated: {
        props: null
      }
    },
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
    this.accountChangeListener = this._setAccountState.bind(this);

    context.setRouter(this);
  }

  _mapMarkedRoutes() {
    var markedRoutes = this.markedRoutes;

    utils.deepForEach(this, (node, parent) => {
      // Try and map the route node to a marked route.
      for (var routeName in markedRoutes) {
        var route = markedRoutes[routeName];
        if (node.type === route.type) {
          var markedRoute = markedRoutes[routeName];

          if (node.type === HomeRoute) {
            if (parent.type === AuthenticatedRoute) {
              markedRoute = markedRoute.authenticated;
            } else {
              markedRoute = markedRoute.notAuthenticated;
            }
          }

          markedRoute.props = node.props;
          break;
        }
      }
    });
  }

  getHomeRoute() {
    return this.markedRoutes.home.notAuthenticated.props;
  }

  getAuthenticatedHomeRoute() {
    return this.markedRoutes.home.authenticated.props;
  }

  getLoginRoute() {
    return this.markedRoutes.login.props;
  }

  getLogoutRoute() {
    return this.markedRoutes.logout.props;
  }

  _setAccountState(account) {
    this.setState({
      authenticated: account !== null,
      account: account
    });
  }

  componentDidMount() {
    this._setAccountState(context.sessionStore.get());
    context.sessionStore.addListener('changed', this.accountChangeListener);
  }

  componentWillUnmount() {
    context.sessionStore.removeListener('changed', this.accountChangeListener);
  }

  getChildContext() {
    return {
      authenticated: this.state.authenticated,
      account: this.state.account
    }
  }
}
