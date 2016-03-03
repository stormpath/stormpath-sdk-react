import app from '../app';

import BaseStore from '../stores/BaseStore';
import UserService from '../services/UserService';
import UserConstants from '../constants/UserConstants';

class UserStore extends BaseStore {
  constructor() {
    super();
    this.service = null;
    this.session = false;
    this.sessionError = null;
    this.sessionResolved = false;
  }

  init(context) {
    this.service = new UserService(context.getEndpoints());
    this.resolveSession();
  }

  getSession() {
    return this.session;
  }

  isAuthenticated(callback) {
    this.resolveSession((err, result) => {
      callback(err, !err && this.session !== false);
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

  resolveSession(callback) {
    if (this.sessionResolved) {
      return callback && callback(this.sessionError, this.session);
    }

    this.service.me((err, result) => {
      this.reset();

      this.sessionResolved = true;

      if (err) {
        this.sessionError = err;
      } else {
        this.session = result;
      }

      if (callback) {
        callback(this.sessionError, this.session);
      }

      this.emitChange();
    });
  }

  reset() {
    this.session = false;
    this.sessionError = null;
    this.sessionResolved = false;
  }
}

var userStore = new UserStore();

app.on('ready', (context) => {
  userStore.init(context);
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
      case UserConstants.USER_VERIFY_EMAIL:
        userStore.verifyEmail(payload.options.spToken, payload.callback);
        break;
    }
    return true;
  });
});

module.exports = userStore;
