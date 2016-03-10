import app from '../app';
import context from '../context';

import utils from '../utils';
import BaseStore from './BaseStore';
import SessionStore from './SessionStore';
import UserService from '../services/UserService';
import UserConstants from '../constants/UserConstants';

class UserStore extends BaseStore {
  constructor(sessionStore) {
    super();
    this.service = null;
    this.sessionError = null;
    this.sessionStore = sessionStore;
  }

  init() {
    this.service = new UserService(context.getEndpoints());
    this.resolveSession();
  }

  isAuthenticated(options, callback) {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.resolveSession((err, user) => {
      var authenticated = !err && !this.sessionStore.empty();

      if (authenticated && options.inGroup) {
        if (user.groups) {
          authenticated = utils.isInGroup(user.groups, options.inGroup);
        } else {
          utils.logWarning('<AuthenticatedRoute> In order to use the inGroup option, you must expand the groups resource for the /me endpoint.');
        }
      }

      callback(err, authenticated);
    });
  }

  getLoginViewData(callback) {
    this.service.getLoginViewData(callback);
  }

  login(options, callback) {
    this.reset();

    this.service.login(options, (err, result) => {
      if (err) {
        return callback(err);
      }

      this.resolveSession(callback);
    });
  }

  register(options, callback) {
    this.service.register(options, callback);
  }

  getRegisterViewData(callback) {
    this.service.getRegisterViewData(callback);
  }

  forgotPassword(options, callback) {
    this.service.forgotPassword(options, callback);
  }

  changePassword(options, callback) {
    this.service.changePassword(options, callback);
  }

  updateProfile(data, callback) {
    this.service.updateProfile(data, callback);
  }

  verifyEmail(spToken, callback) {
    this.service.verifyEmail(spToken, callback);
  }

  logout(callback) {
    this.service.logout((err) => {
      if (err) {
        return callback(err);
      }

      this.reset();
      this.emitChange();

      callback();
    });
  }

  resolveSession(callback, force) {
    if (!force && (this.sessionError || !this.sessionStore.empty())) {
      return callback && callback(this.sessionError, this.sessionStore.get());
    }

    this.service.me((err, result) => {
      if (err) {
        this.sessionError = err;
        this.sessionStore.reset();
      } else {
        this.sessionError = null;
        this.sessionStore.set(result);
      }

      if (callback) {
        callback(this.sessionError, this.sessionStore.get());
      }

      this.emitChange();
    });
  }

  reset() {
    this.sessionError = null;
    this.sessionStore.reset();
  }
}

var userStore = new UserStore(context.sessionStore);

app.on('ready', () => {
  userStore.init();
  context.getDispatcher().register((payload) => {
    switch(payload.actionType) {
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
  });
});

module.exports = userStore;
