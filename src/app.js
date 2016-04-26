import { EventEmitter } from 'events';

import { UserService } from './services';
import { UserConstants } from './constants';
import { UserStore, SessionStore } from './stores';
import { FluxDispatcher, ReduxDispatcher } from './dispatchers';

import utils from './utils';
import context from './context';

class App extends EventEmitter {
  constructor() {
    super();
    this.initialized = false;
  }

  isInitialized() {
    return this.initialized;
  }

  init(options) {
    options = options || {};

    if (this.isInitialized()) {
      throw new Error('React Stormpath already initialized.');
    }

    this.initialized = true;

    var sessionStore = new SessionStore();
    var userService = new UserService(options.endpoints);
    var userStore = new UserStore(userService, sessionStore);

    context.setSessionStore(sessionStore);
    context.setUserStore(userStore);

    // If there's no specified dispatcher, then default to flux.
    var dispatcher = options.dispatcher || { type: 'flux' };

    var userReducer = (payload) => {
      switch(payload.type) {
        case UserConstants.USER_LOGIN:
          userStore.login(payload.options, payload.callback);
          break;
        case UserConstants.USER_LOGOUT:
          userStore.logout(payload.callback);
          break;
        case UserConstants.USER_REGISTER:
          userStore.register(payload.options, payload.callback);
          break;
        case UserConstants.USER_FORGOT_PASSWORD:
          userStore.forgotPassword(payload.options, payload.callback);
          break;
        case UserConstants.USER_CHANGE_PASSWORD:
          userStore.changePassword(payload.options, payload.callback);
          break;
        case UserConstants.USER_UPDATE_PROFILE:
          userStore.updateProfile(payload.data, payload.callback);
          break;
        case UserConstants.USER_VERIFY_EMAIL:
          userStore.verifyEmail(payload.options.spToken, payload.callback);
          break;
      }
      return true;
    };

    switch (dispatcher.type) {
      case 'flux':
        dispatcher = new FluxDispatcher(userReducer);
        break;
      case 'redux':
        dispatcher = new ReduxDispatcher(userReducer, dispatcher.store);
        break;
      default:
        throw new Error('Stormpath SDK: Invalid dispatcher type ' + dispatcher.type);
    }

    context.setDispatcher(dispatcher);
  }
}

export default new App()
